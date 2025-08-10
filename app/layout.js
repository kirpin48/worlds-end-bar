import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata = {
  title: "World's End Bar",
  description: "Tbilisi's home of Cthulhu — drinks, events, and everyday vibes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container pt-6">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
