"use client";

import Link from "next/link";

export default function HeroSection() {
    const skills = [
        { name: "Play Testing", level: 8.5 },
        { name: "3D", level: 4 },
        { name: "Programming", level: 6.5 },
        { name: "Debugging", level: 5 },
        { name: "Documentation", level: 7 },
        { name: "Game Designing", level: 7.5 },
        { name: "UX & Feedback", level: 6 },
        { name: "2D", level: 3 },
    ];

    return (
        <section className="relative py-24 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6 relative z-10">
                {/* Left: Intro & Skills */}
                <div className="md:w-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
                            Hi, We’re Tofu Ventures
                        </h1>
                        <p className="text-gray-900 mb-6">
                            We are a game development team exploring the world of games through testing, learning, and creating innovative projects.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Link
                                href="/works"
                                className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400/30"
                            >
                                See Our Projects
                            </Link>
                            <Link
                                href="https://github.com/eldervsoriano"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-cyan-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_#22d3ee]"
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-cyan-300">Our Skills & Ratings</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-28 flex-shrink-0 text-cyan-400">• {skill.name}</span>
                                    <div className="w-full">
                                        <div className="flex justify-end mb-1 text-xs">
                                            <span>{skill.level}/10</span>
                                        </div>
                                        <div className="w-full bg-gray-700 h-1 rounded">
                                            <div
                                                className="bg-cyan-400 h-1 rounded transition-all duration-500"
                                                style={{ width: `${(skill.level / 10) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Optional image or illustration */}
                <div className="md:w-1/2 flex justify-center items-center">
                    {/* You can add an illustration or team image here */}
                    <img src="/Images/team-illustration.png" alt="Tofu Ventures Team" className="rounded-lg shadow-lg"/>
                </div>
            </div>
        </section>
    );
}
