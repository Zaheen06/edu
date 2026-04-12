import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VTUSection from "@/components/VTUSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VTUSection />
      <CoursesSection />
      <TestimonialsSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default Index;
