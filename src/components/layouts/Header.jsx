"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className='w-full bg-background'>
      <nav className="px-[5%] py-4 w-full grid grid-cols-2 justify-center items-center">

        <Link className="w-fit flex-center" href="/">
          <Ilogo className="w-16 h-16" />
        </Link>


        <div className="w-8 h-8 md:hidden justify-self-end flex-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/" && "bg-accent"} capitalize text-muted-foreground`} href="/">Home</Link>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/projects" && "bg-accent"} capitalize text-muted-foreground`} href="/projects">Portfolio</Link>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/contact" && "bg-accent"} capitalize text-muted-foreground`} href="/contact">Contact</Link>
          <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === "/hire-me" && "bg-accent"} capitalize text-muted-foreground`} href="/hire-now">Hire Now</Link>
          <ThemeToggleBtn />
        </ul>
      </nav>
    </header>
  )
}
