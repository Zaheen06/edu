import { Settings, UserCheck, SlidersHorizontal, Wifi } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Hands-On Learning",
    desc: "Engage with projects designed to build real skills you can apply on day one.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    desc: "Get one-on-one guidance tailored to your goals and learning pace.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Courses",
    desc: "Choose from a variety of courses to suit your schedule and learning style.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Wifi,
    title: "Virtual Internships",
    desc: "Gain real-world experience through fully remote, structured internships.",
    color: "bg-amber-50 text-amber-600",
  },
];

const ServicesSection = () => {
  return (
    <section id="about" className="py-16 md:py-20" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span 
            className="inline-block px-3.5 py-1.5 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold rounded-full mb-4"
            style={{ letterSpacing: '0.03em', textTransform: 'uppercase' }}
          >
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3 leading-tight" style={{ letterSpacing: '-0.01em' }}>
            Empowering Your Learning Journey
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-[1.6]" style={{ color: '#475569' }}>
            Comprehensive learning solutions designed to help you succeed in today's competitive landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6"
                style={{ 
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  minHeight: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div 
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${service.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2.5" style={{ letterSpacing: '-0.01em' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
