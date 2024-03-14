"use client"
import { motion } from "framer-motion"

export default function ServiceCard({ icon, title, desc }) {
    return (
        <motion.div
        initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
         className="relative p-4 h-full w-full hover:bg-gradient-to-tl from-background to-secondary border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <div>{icon}</div>
            <p className="text-lg">{title}</p>
            <p className="text-muted-foreground">{desc}</p>
        </motion.div>
    )
}
