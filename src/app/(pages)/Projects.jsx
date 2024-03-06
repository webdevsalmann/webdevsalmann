import SparkleText from "@/helper/SparkleText";
import HomeProjectCard from "@/components/ui/HomeProjectCard";
import Link from "next/link";
import { projectsData } from "@/lib/const";
import { buttonVariants } from "@/components/ui/button";

export default function Projects() {
    const displayData = projectsData.slice(0, 4);
    return (
        <section className="section-padding">
            <h1 className="mb-8"><SparkleText text="Showcase" /> Projects</h1>

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
