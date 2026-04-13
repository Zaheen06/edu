import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {


  return (
    <section className="relative pt-24 pb-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFBFF 0%, #FFFFFF 100%)' }}>

      <div className="container-custom relative">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 
            className="text-4xl md:text-5xl lg:text-[52px] font-bold mb-5 leading-[1.2]"
            style={{ letterSpacing: '-0.015em', color: '#0F172A' }}
          >
            Learning for the{" "}
            <span className="text-[#2563EB]">Modern World</span>
          </h1>
          
          <p 
            className="text-base mb-8 max-w-[520px] mx-auto leading-[1.65]"
            style={{ color: '#475569' }}
          >
            Reshaping education where accessibility and inclusivity meet real industry experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Button 
              size="lg" 
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 h-11 rounded-lg text-sm font-medium transition-all duration-200"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>


        </div>

      </div>
    </section>
  );
};

export default HeroSection;
