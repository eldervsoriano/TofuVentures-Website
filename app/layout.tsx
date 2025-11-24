import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
    title: "Elder Soriano Portfolio",
    description: "Portfolio website of Elder Soriano",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-200 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
