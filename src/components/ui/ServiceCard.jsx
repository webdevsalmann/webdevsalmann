
export default function ServiceCard({ icon, title, desc }) {
    return (
        <div className="relative p-4 h-full w-full hover:bg-gradient-to-tl from-background to-secondary border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <div>{icon}</div>
            <p className="text-lg">{title}</p>
            <p className="text-muted-foreground">{desc}</p>
        </div>
    )
}
