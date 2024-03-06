import { Idevice, Ioptimize, Ishape, Itools } from "@/components/svgs/svgs";
// import { PiBrowserBold } from "react-icons/pi";
// import { LuHeartHandshake } from "react-icons/lu";
import SparkleText from "@/helper/SparkleText";
import ServiceCard from "@/components/ui/ServiceCard";
import { Earth, MonitorSmartphone, PencilRuler, Shapes, TrendingUp, Wrench } from "lucide-react";

const serviceData = [
    {
        icon: <Shapes className="w-8 h-8 group-hover:text-primary" />,
        title: "Designing & user interfaces",
        desc: "Crafting visually appealing and user-friendly interfaces.",
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 group-hover:text-primary" />,
        title: "Responsive designs",
        desc: "Create designs that work seamlessly across various devices and screen sizes.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 group-hover:text-primary" />,
        title: "Optimizing performance",
        desc: "Optimizing website speed and performance for better user experiences.",
    },
    {
        icon: <Wrench className="w-8 h-8 group-hover:text-primary" />,
        title: "Maintenance and Updates",
        desc: "Will provide ongoing support, updates, and maintenance for projects.",
    },
    {
        icon: <Earth className="w-8 h-8 group-hover:text-primary" />,
        title: "Browser Compatibility",
        desc: "Ensuring that websites work well across different browsers.",
    },
    {
        icon: <PencilRuler className="w-8 h-8 group-hover:text-primary" />,
        title: "Custom Modification",
        desc: "Open to accommodating custom modifications based on client preferences.",
    },
];

export default function Service() {
    return (
        <section className="section-padding">
            <h1 className="mb-8">What <span className=""><SparkleText text="Services" /></span> you get?</h1>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] justify-center items-center">
                {
                    serviceData.map((item, i) => {
                        return <ServiceCard key={i + 1} icon={item.icon} title={item.title} desc={item.desc} />
                    })
                }
            </div>
        </section>
    )
}