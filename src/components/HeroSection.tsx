import { ArrowRight, Users, BookOpen, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const stats = [
    {
      value: "100%",
      label: "Placement Support",
      description: "Real-world experience with top companies.",
      icon: Award,
    },
    {
      value: "50+",
      label: "New Courses",
      description: "Stay ahead with the latest tech trends.",
      icon: BookOpen,
    },
    {
      value: "24/7",
      label: "Access",
      description: "Learn at your own pace, anytime.",
      icon: Clock,
    },
    {
      value: "400+",
      label: "Expert Instructors",
      description: "Seasoned educators & industry leaders.",
      icon: Users,
    },
  ];

  const features = [
    "Flexible Learning",
    "Expert Instructors",
    "Industry Driven Internship",
    "Cutting-Edge Courses",
  ];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFBFF 0%, #FFFFFF 100%)' }}>

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
            <Button 
              size="lg" 
              variant="outline" 
              className="h-11 rounded-lg text-sm font-medium px-7 border-[#D1D5DB] text-[#475569] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#475569] text-sm font-medium rounded-full border border-[#E5E7EB]"
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
              >
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-7 text-center"
                style={{ 
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  minHeight: '100%'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#F0F9FF' }}
                >
                  <Icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2" style={{ letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div className="text-sm font-semibold text-[#0F172A] mb-2">{stat.label}</div>
                <p className="text-xs text-[#6B7280] leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
