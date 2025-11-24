"use client";

export default function Footer() {
    return (
        <footer className="bg-orange-300 text-center py-6 text-yellow-700 text-sm flex items-center justify-center gap-2">
            <p>© 2025 Tofu Ventures. All rights reserved.</p>
            <a
                href="https://www.facebook.com/profile.php?id=61580511241159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-blue-600 transition-colors"
            >
                {/* Facebook SVG Logo */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-blue-600 hover:text-white"
                >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
            </a>
        </footer>
    );
}
