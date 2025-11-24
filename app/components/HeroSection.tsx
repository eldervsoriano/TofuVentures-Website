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
        <section className="py-24 bg-orange-100 text-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">

                {/* Left: Intro & Skills */}
                <div className="md:w-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-yellow-600 drop-shadow-[0_0_10px_rgba(255,200,0,0.7)]">
                            Hi, I’m Elder Soriano
                        </h1>
                        <p className="text-gray-800 mb-6">
                            I’m an aspiring game tester and developer exploring the world of games through testing, learning, and creating small projects.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Link href="/works" className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-400/30">
                                See My Projects
                            </Link>
                            <Link href="https://github.com/eldervsoriano" target="_blank" className="flex items-center gap-2 text-yellow-600 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,0,0.7)]">
                                GitHub
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 text-yellow-500">My Skills & Ratings</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-28 flex-shrink-0 text-yellow-600">• {skill.name}</span>
                                    <div className="w-full">
                                        <div className="flex justify-end mb-1 text-xs">
                                            <span>{skill.level}/10</span>
                                        </div>
                                        <div className="w-full bg-orange-300 h-1 rounded">
                                            <div className="bg-yellow-500 h-1 rounded transition-all duration-500" style={{ width: `${(skill.level / 10) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Placeholder / Image or Illustration */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-md h-64 bg-yellow-100 rounded-lg shadow-lg flex items-center justify-center text-yellow-700 text-2xl font-semibold">
                        Your Illustration / Image Here
                    </div>
                </div>

            </div>
        </section>
    );
}
