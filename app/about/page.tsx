"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Elder Soriano",
            position: "Back End / Game Designer / Game Tester",
            role: "4th-year College Student at the Jose Rizal University | Aspiring QA & Game Tester",
            location: "Makati, Philippines",
            image: "/Images/Icons/profile-pic-about.jpg",
            github: "https://github.com/eldervsoriano",
            linkedin: "https://www.linkedin.com/in/elder-soriano-86892a351/",
        },
        {
            name: "Christian Gabito",
            position: "Front End / 3D & 2D Artist",
            role: "4th-year College Student at the Jose Rizal University | Aspiring Game Designer",
            location: "Pasig, Philippines",
            image: "/Images/Gabito-Profile.png",
            github: "https://github.com/BlitzHeat",
            linkedin: "https://www.linkedin.com/in/christian-gabito-68aa14190/",
        },
        {
            name: "Elija Elcid Gaspar",
            position: "3D Artist / Animator / Rigger",
            role: "4th-year College Student at the Jose Rizal University | Aspiring 3D Artist",
            location: "Mandaluyong, Philippines",
            image: "/Images/Gaspar-Profile.jpg",
            github: "https://github.com/Gasparjru",
            linkedin: "https://www.linkedin.com/in/elijah-cid-gaspar-2b675b39a/",
        },
        {
            name: "Charie Tubil",
            position: "2D Artist",
            role: "4th-year College Student at the Jose Rizal University | Aspiring 2D Artist",
            location: "Pateros, Philippines",
            image: "/Images/Tubil-Profile.jpg",
            github: "#",
            linkedin: "#",
        },
    ];

    return (
        <main className="min-h-screen bg-orange-100 text-gray-900 px-6 py-12 relative overflow-hidden">
            <section className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.02 }} // Smaller zoom
                        transition={{ duration: 0.2 }}
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

                        {/* Social Links with hover effect */}
                        <div className="flex gap-4 mt-4">
                            {member.github && member.github !== "#" && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-110 hover:shadow-[0_0_15px_#ffffff] transition-all duration-300"
                                >
                                    <Github className="w-5 h-5 text-white" />
                                </a>
                            )}
                            {member.linkedin && member.linkedin !== "#" && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-110 hover:shadow-[0_0_15px_#00ffff] transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
