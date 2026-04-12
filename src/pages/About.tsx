
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Rocket,
  Users,
  Award,
  Lightbulb,
  Globe,
  Heart,
  Handshake,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

// Import images
import heroImage from "@/assets/images/about/about-hero-learning.png";
import visionImage from "@/assets/images/about/about-vision-future.png";
import missionImage from "@/assets/images/about/about-innovation-ai.png";
import vtuCollabImage from "@/assets/vtu-collab.jpg";
import journeyImage from "@/assets/images/about/about-journey-growth.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const impactStats = [
  { number: "50K+", label: "Learners Empowered", icon: Users, color: "blue" },
  { number: "1,000+", label: "Virtual Internships", icon: Rocket, color: "violet" },
  { number: "90%", label: "Completion Rate", icon: Award, color: "emerald" },
  { number: "20+", label: "Partner Organizations", icon: Handshake, color: "amber" },
];



const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly adapting to bring the latest advancements in technology to education.",
    gradient: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-100",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making education accessible and inclusive for learners, regardless of limitations.",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving to deliver quality in every course, partnership, and support system.",
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description: "Building strong relationships with universities, partners, and communities.",
    gradient: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-100",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; number: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    number: "text-blue-700",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    number: "text-violet-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    number: "text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    number: "text-amber-700",
  },
};

/* ─────────────────────────────────────────────
   OUR STORY — Z-Pattern Layout
───────────────────────────────────────────── */
const StorySection = () => {
  const storySteps = [
    {
      id: "founded",
      label: "01 — Founded",
      title: "Our Journey of Innovation Began",
      description:
        "In 2018, Edutainer was established with a singular mission — to innovate the future of education. We committed from day one to transforming learning into a more engaging, practical, and future-ready experience.",
      image: journeyImage,
      stats: ["50K+ Students", "10+ Programs", "90% Success Rate"],
      bgColor: "bg-blue-50/50",
      labelColor: "text-blue-600",
      dotColor: "bg-blue-400",
    },
    {
      id: "collaboration",
      label: "02 — Collaboration",
      title: "Strengthening Industry Bonds",
      description:
        "Our landmark partnerships focus on upskilling students through job-ready courses and virtual internships, preparing them with practical skills needed for the fast-paced tech industry.",
      image: vtuCollabImage,
      stats: ["1 Premier Partner", "1,000+ Internships", "Real-world exposure"],
      bgColor: "bg-gray-50/50",
      labelColor: "text-gray-500",
      dotColor: "bg-gray-400",
    },
    {
      id: "growth",
      label: "03 — Growth",
      title: "Expanding Opportunities at Scale",
      description:
        "We launched 15+ successful programs designed to upskill engineering students and professionals in high-demand fields, driving their career growth and job readiness.",
      image: heroImage,
      stats: ["15+ Active Programs", "400K+ Reached", "Industry-aligned"],
      bgColor: "bg-blue-50/50",
      labelColor: "text-blue-600",
      dotColor: "bg-blue-400",
    },
    {
      id: "impact",
      label: "04 — Impact",
      title: "Transforming the Ecosystem",
      description:
        "From individual learners to university-wide implementations, our focus remains on providing accessible, engaging, and highly effective learning experiences.",
      image: visionImage,
      stats: ["Continuous Innovation", "Massive Scale", "Future-ready"],
      bgColor: "bg-gray-50/50",
      labelColor: "text-gray-500",
      dotColor: "bg-gray-400",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:text-center">
        <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
          Our Story
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          A Journey of Innovation
        </h2>
      </div>

      <div className="flex flex-col">
        {storySteps.map((step, index) => {
          const isEven = index % 2 === 1; // 1, 3 for text on the left
          return (
            <div key={step.id} className={`py-16 lg:py-24 ${step.bgColor} border-y border-transparent transition-colors`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  
                  {/* Image container */}
                  <div className={`order-1 ${isEven ? 'lg:order-2' : ''} animate-fade-in`}>
                    <div className="aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`order-2 ${isEven ? 'lg:order-1' : ''} animate-fade-in`}>
                    <span className={`text-xs font-bold tracking-[0.15em] uppercase mb-4 block ${step.labelColor}`}>
                      {step.label}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                      {step.description}
                    </p>
                    
                    {/* Inline stats */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                      {step.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`} />
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const About = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══════════════════════════════════════
          HERO — Split layout, clean and bold
      ══════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        {/* Subtle background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-60 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="max-w-xl animate-fade-up">
              {/* Eyebrow pill */}
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-8 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                About Edutainer
              </span>

              <h1 className="text-5xl lg:text-[3.75rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Building the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Future</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100 -z-0 rounded" />
                </span>{" "}
                of Education
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                A future-ready educational ecosystem where innovation meets
                opportunity — empowering learners to unlock their full potential
                and shape the world.
              </p>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                {impactStats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-gray-900 tracking-tight">
                      {s.number}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hero image with decorative frame */}
            <div className="relative animate-fade-in">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-100 pointer-events-none z-0" />
                <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Edutainer — Building the Future of Education"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent" />
                </div>

                {/* Floating achievement badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-3 shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Growth Rate</div>
                    <div className="text-base font-bold text-gray-900">+120% YoY</div>
                  </div>
                </div>

                {/* Floating learners badge */}
                <div className="absolute -top-5 -right-5 bg-blue-600 rounded-xl px-5 py-3 shadow-xl flex items-center gap-3 z-20">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <div className="text-sm font-semibold text-white">50K+ Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPACT STATS — 4-column cards
      ══════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => {
              const Icon = stat.icon;
              const c = colorMap[stat.color];
              return (
                <div
                  key={stat.label}
                  className={`relative bg-white rounded-2xl p-7 border ${c.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
                >
                  {/* Background tint on hover */}
                  <div className={`absolute inset-0 ${c.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-11 h-11 ${c.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <div className={`text-4xl font-bold ${c.number} mb-1 tracking-tight`}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISION & MISSION — Zig-zag layout
      ══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-xl mb-20">
            <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
              Driven by Purpose,<br />Guided by Vision
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every decision we take is rooted in a clear purpose — to make
              education transformative, accessible, and aligned with the real world.
            </p>
          </div>

          <div className="space-y-24">
            {/* Vision — image left, text right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={visionImage}
                    alt="Our Vision"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-blue-600 opacity-10 -z-10" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-blue-100">
                  <Target className="w-3.5 h-3.5" />
                  Our Vision
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                  A Transformative Educational Ecosystem
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  To build a transformative and future-ready educational ecosystem
                  where innovation meets opportunity, empowering learners from all
                  backgrounds to unlock their full potential. We envision education
                  as a catalyst for creativity, critical thinking, and real-world
                  problem-solving.
                </p>
                <ul className="space-y-3">
                  {[
                    "Future-ready curriculum aligned with industry",
                    "Inclusive access regardless of background",
                    "Catalyst for creativity and critical thinking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission — text left, image right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-violet-100">
                  <Rocket className="w-3.5 h-3.5" />
                  Our Mission
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                  Bridging Learning and Modern Technology
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  To bridge the gap between conventional learning and modern
                  technology by transforming traditional education into a more
                  accessible, engaging, and future-focused experience — equipping
                  learners with practical skills and real-world knowledge for
                  careers that matter.
                </p>
                <ul className="space-y-3">
                  {[
                    "Practical, project-based skill development",
                    "Industry partnerships for real-world exposure",
                    "Mentoring and personalized career support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={missionImage}
                    alt="Our Mission"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-violet-600 opacity-10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY — Z-Pattern Layout
      ══════════════════════════════════════ */}
      <StorySection />

      {/* ══════════════════════════════════════
          CORE VALUES — 4-column icon cards
      ══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              The principles that guide every decision, every product, every partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`group bg-white rounded-2xl p-7 border ${value.borderColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden`}
                >
                  {/* Decorative gradient blob */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${value.gradient} opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className={`w-12 h-12 ${value.bgLight} rounded-xl flex items-center justify-center mb-6 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${value.textColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{value.description}</p>

                  <div className={`mt-6 pt-5 border-t ${value.borderColor}`}>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${value.textColor}`}>
                      <Zap className="w-3 h-3" />
                      Core Principle
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VTU PARTNERSHIP — Full highlight band
      ══════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-blue-600 tracking-[0.12em] uppercase mb-4 block">
                Strategic Partnership
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
                Empowering 400,000+ Engineers with VTU
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our partnership with Visvesvaraya Technological University (VTU)
                is our most impactful collaboration to date — delivering
                job-ready programs and virtual internships to over 400,000
                engineering students across Karnataka.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "400K+", label: "Students Reached" },
                  { value: "1,000+", label: "Internships" },
                  { value: "15+", label: "Programs" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 tracking-tight">{s.value}</div>
                    <div className="text-xs font-medium text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-sm shadow-md shadow-blue-200"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={vtuCollabImage}
                  alt="VTU Partnership"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-blue-600 opacity-10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-14 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
                <BookOpen className="w-3.5 h-3.5" />
                Start Today
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join over 50,000 learners who are already building their future
                with Edutainer's world-class programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#courses"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-md text-sm"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
