import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import StickyBookingBar from "@/components/StickyBookingBar";
import ExperienceText from "@/components/ExperienceText";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <main>
        <Hero />
        <section className="-mt-10 bg-sand">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-6 sm:px-6 lg:px-8">
            <Reveal>
              <ExperienceText />
            </Reveal>
          </div>
        </section>
        <FeaturedDishes />
        <TestimonialsSection />
        <AboutSection />
        <BookingSection />
        <MapSection />
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}
