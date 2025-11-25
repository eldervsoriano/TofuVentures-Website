"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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
            className="sticky top-0 z-50 bg-orange-300/80 backdrop-blur-md border-b border-orange-400 shadow-md text-gray-900"
        >
            <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-900 drop-shadow-[0_0_5px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] transition-all duration-300">
                    TOFU VENTURE
                </h1>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 relative">
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

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block h-0.5 w-full bg-gray-900 rounded transition-transform duration-300 ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-gray-900 rounded transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-gray-900 rounded transition-transform duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden md:hidden px-6 pb-3"
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`block py-2 transition-colors duration-300 ${
                            pathname === link.href
                                ? "text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                                : "hover:text-gray-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>
        </motion.nav>
    );
}
