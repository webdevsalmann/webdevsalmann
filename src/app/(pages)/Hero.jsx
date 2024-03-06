import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/helper/SparkleText";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section>
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3 flex-center flex-col">
                    <div>
                        <h1 className="">I&apos;M SALMAN MALLICK <br />
                            A <span className="clr-p"><SparkleText text="FRONTEND" /></span> DEVELOPER
                        </h1>

                        <p className="text-muted-foreground">
                            Specializes in crafting visually striking and <span className="font-bold"> user-friendly </span> websites. I prioritizes clean and <span className="font-bold"> simple content structures</span>, coupled with <span className="font-bold"> thoughtful interactions </span> to enhance the user experience.
                        </p>
                    </div>
                    <Link className={`${buttonVariants()} mt-6 self-start`} href="/hire-now">Hire Now</Link>
                </div>

                <div className="p-6 w-full bg-contain flex-center md:col-span-2">
                    <Image
                        className="object-contain object-center rounded"
                        width={5000}
                        height={5000}
                        src="/hero.svg"
                        alt="hero"
                    />
                </div>
            </div>
        </section>
    )
}
