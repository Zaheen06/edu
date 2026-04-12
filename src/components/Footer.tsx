import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Courses", href: "/#courses" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };

  const footerStats = [
    { val: "10k+", label: "Students" },
    { val: "50+", label: "Courses" },
    { val: "95%", label: "Success Rate" },
  ];

  return (
    <footer className="bg-[#0F172A]" style={{ borderTop: '1px solid #1E293B' }}>
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/edu_logo.svg"
                  alt="Edutainer Logo"
                  className="h-8 w-auto brightness-0 invert"
                  style={{ maxHeight: '32px' }}
                />
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-md">
                Reshaping Learning for the Modern World, where Education Meets Accessibility and Inclusivity.
              </p>
            </motion.div>
          </div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 
              className="text-[11px] font-semibold text-[#94A3B8] mb-5 uppercase"
              style={{ letterSpacing: '0.05em' }}
            >
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 
              className="text-[11px] font-semibold text-[#94A3B8] mb-5 uppercase"
              style={{ letterSpacing: '0.05em' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
       
      </div>
    </footer>
  );
};

export default Footer;
