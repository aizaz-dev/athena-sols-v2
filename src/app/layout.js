import Navbar from "./component/Navbar";
import "./globals.css";

export const metadata = {
  title: "The CMS for Modern Teams",
  description: "Kontent.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Optional footer */}
        <footer className="bg-black text-white text-center py-4 text-sm">
          © {new Date().getFullYear()} CMS Clone. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
