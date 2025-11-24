"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Developers", href: "/about" },
        { name: "Models", href: "/works" },

    ];


    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between items-center px-6 py-3 bg-orange-300/80 backdrop-blur-md border-b border-orange-400 sticky top-0 z-50 shadow-md text-gray-900"
        >
            {/* Logo as Text */}
            <h1 className="text-2xl font-bold text-gray-900 drop-shadow-[0_0_5px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] transition-all duration-300">
                TOFU VENTURE
            </h1>


            {/* Nav Links */}
            <div className="flex gap-8 relative">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative transition-colors duration-300 ${
                            pathname === link.href
                                ? "text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                                : "hover:text-gray-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        }`}
                    >
                        {link.name}
                        <span
                            className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 ${
                                pathname === link.href ? "w-full" : "group-hover:w-full"
                            }`}
                        />
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
