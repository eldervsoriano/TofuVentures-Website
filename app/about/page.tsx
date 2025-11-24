"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Elder Soriano",
            position: "Back End / Game Designer / Game Tester",
            role: "4th-year College Student at the Jose Rizal University | Aspiring QA & Game Tester",
            location: "Makati, Philippines",
            image: "/Images/Icons/profile-pic-about.jpg",
        },
        {
            name: "Christian Gabito",
            position: "Front End / 3D & 2D Artist",
            role: "4th-year College Student at the Jose Rizal University | Aspiring Game Designer",
            location: "Pasig, Philippines",
            image: "/Images/Icons/christian.jpg",
        },
        {
            name: "Elija Elcid Gaspar",
            position: "3D Artist / Animator / Rigger",
            role: "4th-year College Student at the Jose Rizal University | Aspiring 3D Artist",
            location: "Mandaluyong, Philippines",
            image: "/Images/Gaspar-Profile.jpg",
        },
        {
            name: "Charie Tubil",
            position: "2D Artist",
            role: "4th-year College Student at the Jose Rizal University | Aspiring 2D Artist",
            location: "Pateros, Philippines",
            image: "/Images/Icons/charie.jpg",
        },
    ];

    return (
        <main className="min-h-screen bg-orange-100 text-gray-900 px-6 py-12 relative overflow-hidden">
            <section className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.07 }} // Slightly bigger zoom
                        transition={{ duration: 0.2 }} // Makes hover zoom faster
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
                        className="flex flex-col items-center text-center bg-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl"
                    >
                        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_20px_#ffd96680] mb-4 hover:shadow-[0_0_30px_#ffd966aa]">
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
