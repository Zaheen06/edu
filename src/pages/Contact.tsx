import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      {/* Page Title Section */}
      <section style={{ 
        backgroundColor: 'white', 
        paddingTop: '48px', 
        paddingBottom: '40px',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ 
            fontSize: '38px', 
            fontWeight: 600, 
            color: '#0F172A',
            marginBottom: '12px'
          }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.6' }}>
            Have a question or want to visit us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section style={{ padding: '36px 48px' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.1fr 1fr', 
            gap: '28px' 
          }} className="contact-grid">
            
            {/* Left Column: Map Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '0.5px solid #E2E8F0',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '28px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#0F172A',
                  marginBottom: '8px'
                }}>
                  Our Location
                </h2>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
                  Visit our office or reach out to us online. We're here to help you succeed.
                </p>
              </div>
              
              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943093!2d77.46612639453125!3d12.953945599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Footer Strip */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '14px 28px',
                borderTop: '1px solid #E2E8F0'
              }}>
                <span style={{ fontSize: '14px', color: '#64748B' }}>
                  Bangalore, Karnataka, India
                </span>
                <a 
                  href="https://maps.google.com/?q=Bangalore,Karnataka,India" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '14px', 
                    color: '#2563EB',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: 500
                  }}
                >
                  Open in Maps <ArrowRight style={{ width: '14px', height: '14px' }} />
                </a>
              </div>
            </div>

            {/* Right Column: Three Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Chat with Us Card */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '0.5px solid #E2E8F0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#EEF2FF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageCircle style={{ width: '20px', height: '20px', color: '#4338CA' }} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '4px' }}>
                    Chat with Us
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '8px', lineHeight: '1.5' }}>
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <a 
                    href="mailto:support@edutainer.in" 
                    style={{ fontSize: '13px', color: '#2563EB', textDecoration: 'none', fontWeight: 500 }}
                  >
                    support@edutainer.in
                  </a>
                </div>
              </div>

              {/* Phone Support Card */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '0.5px solid #E2E8F0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ECFDF5',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone style={{ width: '20px', height: '20px', color: '#059669' }} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '4px' }}>
                    Phone Support
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '8px', lineHeight: '1.5' }}>
                    Available Monday to Friday, 9am to 6pm IST
                  </p>
                  <a 
                    href="tel:+919876543210" 
                    style={{ fontSize: '13px', color: '#2563EB', textDecoration: 'none', fontWeight: 500 }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Visit Our Office Card */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '0.5px solid #E2E8F0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#FFFBEB',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin style={{ width: '20px', height: '20px', color: '#D97706' }} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '4px' }}>
                    Visit Our Office
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}>
                    Bangalore, Karnataka, India
                    <br />
                    Come say hello at our office HQ
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
