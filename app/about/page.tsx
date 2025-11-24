"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Elder Soriano",
            position: "Game Designer / Programmer",
            role: "4th-year College Student / Aspiring QA & Game Tester",
            location: "Makati, Philippines",
            image: "/Images/Icons/profile-pic-about.jpg",
        },
        {
            name: "Nicole",
            position: "UI/UX Designer / Artist",
            role: "Friend & Collaborator",
            location: "Pangasinan City",
            image: "/Images/Icons/nicole.jpg",
        },
        // Add more team members here as needed
    ];

    return (
        <main className="min-h-screen bg-orange-100 text-gray-900 px-6 py-12 relative overflow-hidden">
            <section className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center bg-orange-50 p-6 rounded-xl shadow-lg"
                    >
                        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_20px_#ffd96680] mb-4">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-yellow-600">{member.name}</h3>
                        <p className="text-yellow-500 font-medium mt-1">{member.position}</p>
                        <p className="text-gray-700 mt-2">{member.role}</p>
                        <p className="text-gray-500 text-sm mt-1">{member.location}</p>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
