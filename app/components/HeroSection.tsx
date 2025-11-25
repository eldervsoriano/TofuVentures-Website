"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-24 bg-orange-100 text-gray-900">
            <div className="max-w-6xl mx-auto px-6">

                {/* Game Cover */}
                <div className="mx-auto w-full max-w-sm mb-12 flex flex-col items-center">
                    <Image
                        src="/Images/LaroNgBayan-Cover.jpg"
                        alt="Laro Ng Bayan Cover"
                        width={400}
                        height={225} // keeps original 16:9 ratio
                        className="object-contain rounded-lg shadow-lg"
                    />
                    {/* Download Button */}
                    <a
                        href="https://drive.google.com/file/d/1IuKYGzk9tmiku8qm1x2g9hWDsFqenlkb/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                    >
                        Download Game
                    </a>

                </div>

                {/* Game Title */}
                <h1 className="text-4xl font-extrabold text-center mb-6">
                    Laro ng Bayan
                </h1>

                {/* Game Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                    <span className="font-semibold">Laro ng Bayan</span> is a 3D party game and a modern take on classic Filipino street games, letting players enjoy <span className="font-semibold">Jolen, Turumpo, Tumbang Preso,</span> and <span className="font-semibold">Spider Derby</span> in a digital experience. Play through <span className="font-semibold">Story Mode</span> against AI opponents or challenge your friends in local PVP. Whether for nostalgia or discovery, <span className="font-semibold">Laro ng Bayan</span> brings traditional games to today’s generation in an exciting, interactive way.
                </p>

                {/* Game Mechanics Section */}
                <div className="space-y-8 mb-16">
                    {/* Jolen */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Jolen</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A precision-flick game where players drag and pull the marble with the mouse to aim, then release to shoot. The goal is to knock the yellow jolens out of the marked square—each one you push out earns points. <span className="font-semibold">Simple controls, satisfying shots.</span>
                        </p>
                    </div>

                    {/* Turumpo */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Turumpo</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A rhythm-style game. Keys fall from above, and players must press the correct inputs (WASD or Arrow Keys) in time to keep their HP up. Missing beats drains health, while hitting them fills your bar. <span className="font-semibold">Rack up points before the timer runs out.</span>
                        </p>
                    </div>

                    {/* Tumbang Preso */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Tumbang Preso</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Players drag and flick a slipper toward the can, using a pull-and-release mouse control. The opposing player (or AI) must defend using a reaction-based blocking minigame. <span className="font-semibold">Outplay, out-aim, and out-defend.</span>
                        </p>
                    </div>

                    {/* Spider Derby */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Spider Derby</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A rock-paper-scissors match. Each round, players choose a move; the losing spider takes damage based on the result. <span className="font-semibold">First spider to drop to zero HP loses the match.</span>
                        </p>
                    </div>

                    {/* Note */}
                    <div>
                        <p className="text-gray-600 italic">
                            Note: These games are inspired by real Filipino street games but are not 1:1 simulations. Some mechanics—like Spider Derby’s rock-paper-scissors combat or Turumpo’s rhythm gameplay—are creative reinterpretations designed for fun and accessibility in a digital format.
                        </p>
                    </div>
                </div>

                {/* Awards & Certificates Section */}
                <div className="py-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Awards & Certificates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        {/* Award Image with Hover */}
                        <div className="flex justify-center group">
                            <div className="overflow-hidden rounded-lg shadow-md transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                <Image
                                    src="/Images/Laro-ng-Bayan-Awarding.jpg"
                                    alt="Laro Ng Bayan Awarding"
                                    width={400}
                                    height={225}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Certificate Image with Hover */}
                        <div className="flex justify-center group">
                            <div className="overflow-hidden rounded-lg shadow-md transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                <Image
                                    src="/Images/LaroNgBayan-Certificates.jpg"
                                    alt="Laro Ng Bayan Certificates"
                                    width={400}
                                    height={225}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}
