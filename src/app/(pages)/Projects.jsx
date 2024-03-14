"use client"
import SparkleText from "@/components/helper/SparkleText";
import HomeProjectCard from "@/components/ui/HomeProjectCard";
import Link from "next/link";
import { projectsData } from "@/lib/const";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion"

export default function Projects() {
    const displayData = projectsData.slice(0, 3);
    return (
        <section className="section-padding">
            <motion.h2
                className="md:text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            ><SparkleText text="Portfolio" /></motion.h2>

            <div className="flex flex-col gap-10">
                {displayData && displayData.map((item, i) => (
                    <HomeProjectCard
                        key={item.title + "homeProject"}
                        position={i}
                        title={item.title}
                        desc={item.desc}
                        concept={item.concept}
                        link={item.link}
                        img={item.img} />
                ))}
            </div>
            <div className="mt-10 flex-center">
                <Link href="/projects" className={buttonVariants({ variant: "secondary" })}>View More</Link>
            </div>
        </section>
    )
}
