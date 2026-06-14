import Footer from "@/components/Footer";
import MenuPageBackground from "@/components/MenuPageBackground";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function MenuPage() {
  return (
    <div className="relative min-h-screen">
      <MenuPageBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24">
          <MenuSection />
        </main>
        <Footer />
        <StickyBookingBar />
      </div>
    </div>
  );
}
