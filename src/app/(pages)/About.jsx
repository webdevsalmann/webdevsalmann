import SparkleText from "@/components/helper/SparkleText";
import TechCard from "../../components/ui/TechCard";
import { IExpress, IGithub, INext, IShadcn } from "@/components/svgs/svgs";

export default function About() {
    return (
        <>
            <section id="about" className="relative bg-muted" >
                <div>
                    <h2 className="md:text-center"><SparkleText text="About" /> me</h2>
                    <p className="md:mx-auto md:w-3/4 md:text-center text-muted-foreground">I&apos;m a skilled web developer with experience in JavaScript, and expertise in frameworks like React, Node.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!</p>
                </div>
            </section>

            <section>
                <h2 className="md:text-center"><span className="clr-p"><SparkleText text="Tech Stack" /> </span> I Handle</h2>
                <div className="mt-8 w-full flex gap-6 flex-wrap justify-around">
                    <div className="w-fit border rounded">
                        <div className="py-4 bg-muted text-2xl font-semibold text-center">Languages</div>
                        <div className="p-2 flex gap-4 flex-center flex-wrap">
                            <TechCard img="./images/icons/html.svg" label="HTML" />
                            <TechCard img="./images/icons/css.svg" label="CSS" />
                            <TechCard img="./images/icons/js.svg" label="JS" />
                        </div>
                    </div>
                    <div className="w-fit border rounded">
                        <div className="py-4 bg-muted text-2xl font-semibold text-center">Others</div>
                        <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
                            <TechCard img="./images/icons/git.svg" label="Git" />
                            <TechCard icon={<IGithub className="w-fit h-fit text-foreground" />} label="Github" />
                            <TechCard img="./images/icons/npm.svg" label="npm" />
                            <TechCard img="./images/icons/vs-code.svg" label="VS-code" />
                        </div>
                    </div>
                    <div className="w-fit border rounded">
                        <div className="py-4 bg-muted text-2xl font-semibold text-center">Technologies</div>
                        <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
                            <TechCard img="./images/icons/tailwindcss.svg" label="Tailwind" />
                            <TechCard icon={<IShadcn className="w-fit h-fit text-foreground" />} label="Shadcn-UI" />
                            <TechCard img="./images/icons/react.svg" label="React JS" />
                            <TechCard icon={<INext className="w-fit h-fit text-foreground" />} label="Next JS" />
                            <TechCard img="./images/icons/nodejs.svg" label="Node JS" />
                            <TechCard icon={<IExpress className="w-fit h-fit text-foreground" />} label="Express" />
                            <TechCard img="./images/icons/mongodb.svg" label="MongoDB" />
                            <TechCard img="./images/icons/appwrite.svg" label="AppWrite" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
