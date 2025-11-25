"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorksPage() {
    const images = [
        { src: "/Images/Aiden.png", name: "Aiden" },
        { src: "/Images/Andrea.png", name: "Andrea" },
        { src: "/Images/Charles.png", name: "Charles" },
        { src: "/Images/Larong_Bayan_Flier_2.png", name: "Larong Bayan Flier" },
        { src: "/Images/Larong_Bayan_Poster_3.png", name: "Larong Bayan Poster" },
        { src: "/Images/Michael.png", name: "Michael" },
        { src: "/Images/Nina.png", name: "Nina" },
    ];

    return (
        <main className="relative min-h-screen bg-orange-100 text-gray-900 overflow-hidden px-6 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl font-bold mb-12 text-center text-yellow-600 drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
            >
                Character Gallery
            </motion.h1>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
            >
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-72 bg-orange-50/70 rounded-2xl shadow-lg border border-yellow-400 p-2 overflow-hidden"
                    >
                        <Image
                            src={img.src}
                            alt={img.name}
                            fill
                            className="object-contain"
                        />
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-yellow-600 font-semibold text-center drop-shadow-[0_0_8px_#ffd966]">
                            {img.name}
                        </span>
                    </motion.div>
                ))}
            </motion.section>
        </main>
    );
}
