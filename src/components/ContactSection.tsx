import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, ThumbsUp } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "support@edutainer.in", href: "mailto:support@edutainer.in" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Visit Us", value: "Bangalore, Karnataka, India", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className="inline-block px-4 py-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold rounded-full mb-6"
              style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
              Not sure where to start?
            </h2>
            <p className="text-base text-[#64748B] max-w-2xl mx-auto leading-[1.7]">
              Have questions or need guidance? We're here to help you choose the right course, understand internships, or get personalised support.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Let's Connect</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Ready to transform your career? Our education experts are standing by to help you choose the perfect learning path.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#DBEAFE] transition-colors duration-200">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94A3B8] font-medium mb-1">{info.label}</div>
                      <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center" style={{ border: '1px solid #E2E8F0' }}>
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="text-2xl font-bold text-[#0F172A]">24hrs</div>
                <div className="text-xs text-[#64748B] mt-1">Response Time</div>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center" style={{ border: '1px solid #E2E8F0' }}>
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-3">
                  <ThumbsUp className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div className="text-2xl font-bold text-[#0F172A]">98%</div>
                <div className="text-xs text-[#64748B] mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-8"
            style={{ 
              border: '1px solid #E2E8F0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)'
            }}
          >
            <div className="mb-7">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Send us a message</h3>
              <p className="text-sm text-[#64748B]">We'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="h-11 rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <Input 
                  placeholder="Last Name" 
                  className="h-11 rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-11 rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="h-11 rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Input 
                placeholder="Subject" 
                className="h-11 rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Textarea 
                placeholder="Your Message" 
                rows={4} 
                className="resize-none rounded-lg border-[#E2E8F0] focus:border-[#2563EB] transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Button 
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white h-11 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.35)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <p className="text-xs text-[#94A3B8] text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
