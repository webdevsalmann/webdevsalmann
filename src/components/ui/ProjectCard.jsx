import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./button";

export default function ProjectCard({ title, desc, link, img, concept }) {
    const arr = concept;
    return (
        <div className="relative bg-card border rounded-lg group hover:-translate-y-2 overflow-hidden transition-all">
            <div className="p-4 group-hover:p-0 aspect-video  transition-all">
                <Image
                    className="w-full h-full flex-center object-cover bg-center rounded-md group-hover:rounded-none overflow-hidden transition-all"
                    src={img}
                    alt={title}
                    width={1600}
                    height={900}
                />
            </div>
            <div className="p-4">
                <div className="flex-between">
                    <div className="font-bold text-foreground">{title}</div>
                    <Link className={buttonVariants({ variant: "link" })} href={link} target="blank">Open</Link>
                </div>
                <div className="text-muted-foreground">{desc}</div>
            </div>
            {arr &&
                <div className="absolute top-4 left-4 bg-blue-100 font-bold text-blue-900 px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 manage-text max-w-[10rem]"> {
                    arr.map(item => {
                        return <div key={item} className="capitalize">{item}</div>
                    })
                }</div>
            }
        </div>
    )
}