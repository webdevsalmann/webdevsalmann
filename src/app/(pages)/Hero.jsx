"use client"
import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero() {
    const animateh1 = {

    }
    return (
        <section className="bg-[url('/images/illustration/bbblurry.svg')]">
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3 flex-center flex-col">
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            I&apos;M SALMAN MALLICK <br />
                            A <span className="clr-p"><SparkleText text="FRONTEND" /></span> DEVELOPER
                        </motion.h1>

                        <motion.p
                            className="text-muted-foreground"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            Specializes in crafting visually striking and <span className="font-bold"> user-friendly </span> websites. I prioritizes clean and <span className="font-bold"> simple content structures</span>, coupled with <span className="font-bold"> thoughtful interactions </span> to enhance the user experience.
                        </motion.p>
                    </div>
                    <motion.div
                        className="mt-6 self-start"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <Link className={`${buttonVariants()} `} href="/hire-now">Hire Now</Link>
                    </motion.div>
                </div>

                <motion.div
                    className="p-6 w-full bg-contain flex-center md:col-span-2 bg-[url('/images/illustration/boxes.svg')] rounded-2xl overflow-hidden"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <Image
                        className="relative object-contain object-center rounded z-10"
                        width={5000}
                        height={5000}
                        src="/hero.svg"
                        alt="hero"
                    />
                </motion.div>
            </div>
        </section>
    )
}
