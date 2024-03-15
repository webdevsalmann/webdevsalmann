import Image from "next/image";

export default function TechCard({ img, icon, label }) {
    return (
        <div className="relative p-2 max-w-20 flex-center flex-col rounded-md border">
            <div className="relative h-full p-1 flex-center aspect-square w-full">
                {img ? <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={label}
                /> : icon}
            </div>
            <span className='mt-2 relative text-muted-foreground text-xs'>{label}</span>
        </div>
    )
}