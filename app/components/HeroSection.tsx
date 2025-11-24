"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-24 bg-orange-100 text-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Game Cover */}
                <div className="mx-auto w-full max-w-sm">
                    <Image
                        src="/Images/LaroNgBayan-Cover.jpg"
                        alt="Laro Ng Bayan Cover"
                        width={400}
                        height={225} // keeps original 16:9 ratio
                        className="object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
