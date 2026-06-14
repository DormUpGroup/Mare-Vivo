import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <main className="pt-24">
        <MenuSection />
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}
