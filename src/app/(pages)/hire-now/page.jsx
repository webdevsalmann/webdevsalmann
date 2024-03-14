import ProjectCard from "@/components/ui/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Link from "next/link";

export default function page() {
    return (
        <section className="section-padding">
            <h2 className="mb-8 md:text-center"><SparkleText text="Hire Me" /> For Project</h2>

            <div className="my-6 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
                <ProjectCard
                    title="Freelancer.com"
                    link="https://www.freelancer.com/u/Salman3216"
                    img="/images/hire/freelancer.png"
                />
                <ProjectCard
                    title="fiverr.com"
                    link="https://www.fiverr.com/salman_mallick"
                    img="/images/hire/fiverr.png"
                />
            </div>
            <div className="mt-6 w-full flex-center">
                <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>Contact Now</Link>
            </div>
        </section>
    )
}
