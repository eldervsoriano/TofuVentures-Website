"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Works", href: "/works" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between items-center px-8 py-4 bg-orange-300/80 backdrop-blur-md border-b border-orange-400 sticky top-0 z-50 shadow-md text-gray-900"
        >
            <h1 className="text-2xl font-bold text-yellow-600 tracking-wide drop-shadow-[0_0_5px_rgba(255,200,0,0.7)] hover:drop-shadow-[0_0_15px_rgba(255,220,0,0.9)] transition-all duration-300">
                Tofu Ventures
            </h1>

            <div className="flex gap-8 relative">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative transition-colors duration-300 ${
                            pathname === link.href
                                ? "text-yellow-600 font-semibold drop-shadow-[0_0_10px_rgba(255,200,0,0.7)]"
                                : "hover:text-yellow-500 hover:drop-shadow-[0_0_8px_rgba(255,180,0,0.5)]"
                        }`}
                    >
                        {link.name}
                        <span
                            className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
                                pathname === link.href ? "w-full" : "group-hover:w-full"
                            }`}
                        />
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
