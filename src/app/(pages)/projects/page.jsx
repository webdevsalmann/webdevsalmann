import ProjectCard from "@/components/ui/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { projectsData } from "@/lib/const";
import SparkleText from "@/helper/SparkleText";
import Link from "next/link";

export default function Page() {
  return (
    <section className="section-padding">
      <h1 className="mb-8">Showcase <SparkleText text="Projects" /></h1>
      <div className="my-6 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
        {
          projectsData.map((project, index) => (
            <ProjectCard
              key={index + 11}
              title={project.title}
              desc={project.desc}
              link={project.link}
              concept={project.concept}
              img={project.img}
            />
          ))
        }
      </div>
      <div className="mt-6 w-full flex-center">
        <Link href="/hire-now" className={buttonVariants({variant:"secondary"})}>Hire For Project</Link>
      </div>
    </section>
  )
}
