import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, TrendingDown, Shield, Clock, Award, MapPin, Plane, Phone } from 'lucide-react';
import titaniumImg from './assets/titanium.jpg';
import clinicImg from './assets/clinic_interior.jpg';
import usOfficeImg from './assets/us_office.jpg';
import qualityImg from './assets/quality.jpg';
import valueImg from './assets/value.jpg';
import supportImg from './assets/support.jpg';
import luxuryImg from './assets/luxury.jpg';

const EsvitaLanding = () => {

  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '' });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);



  const testimonials = [
    { name: 'Robert M.', location: 'Florida, USA', text: 'I was skeptical about traveling abroad for dental work, but Esvita changed my life. The quality exceeded any US clinic I visited, and I saved over $15,000. The US-based follow-up gave me complete peace of mind.', rating: 5, procedure: 'All-on-4 Upper & Lower' },
    { name: 'Jennifer K.', location: 'California, USA', text: 'Best decision ever! The entire team spoke perfect English, the facility was more modern than my dentist in LA, and having US support after returning home made the process seamless.', rating: 5, procedure: 'All-on-4 Upper Jaw' },
    { name: 'Michael T.', location: 'Texas, USA', text: 'As a veteran, I researched extensively. The Hiossen implants they use are premium quality. Esvita delivered exceptional results for a fraction of the US price.', rating: 5, procedure: 'All-on-4 Full Arch' }
  ];

  const whyTurkey = [
    { image: supportImg, title: 'World-Class Quality', desc: 'Turkey is the #2 medical tourism destination with ISO-certified facilities' },
    { image: qualityImg, title: 'Unbeatable Value', desc: '82% lower costs than US while maintaining premium standards' },
    { image: luxuryImg, title: 'US-Based Support', desc: 'Meet our team in the USA for consultations and follow-ups' },
    { image: valueImg, title: 'Luxury Experience', desc: '5-star hotel and VIP transfers included in package' }
  ];

  return (
    <div className="text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6, #06b6d4);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: shimmer 3s linear infinite;
          background-size: 200% 200%;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%);
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.5), 0 0 0 0 rgba(59, 130, 246, 0.6);
          animation: pulse 2s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 50px rgba(59, 130, 246, 0.7);
          animation: none;
        }
        
        .hero-image {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%),
                      url('data:image/svg+xml,<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="800" fill="%231e3a8a" opacity="0.1"/><circle cx="300" cy="400" r="200" fill="%233b82f6" opacity="0.15"/><circle cx="900" cy="400" r="250" fill="%2306b6d4" opacity="0.1"/></svg>');
          background-size: cover;
          background-position: center;
        }
        
        .proof-card {
          background: rgba(20, 20, 20, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .proof-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.5);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .video-placeholder {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .video-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.1) 50%, transparent 70%);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Top Header Banner */}
      <div className="border-b border-white/10 py-6 px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Get Your Dream Smile in Turkey
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
            All-on-4 Treatment $10,499
          </span>
        </h1>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-12 pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-image opacity-40" />
        <div className="absolute inset-0 bg-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6 animate-in">
              <TrendingDown className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Save 82% vs. US Prices</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-in tracking-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">
                Less Cost,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                More Quality
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in" style={{ animationDelay: '0.2s' }}>
              Experience the perfect balance of comfort and lasting strength for a confident smile. Our titanium-supported dentures combine cutting-edge technology with biocompatible materials for optimal results.
            </p>

            <div className="flex flex-col gap-4 justify-center lg:justify-start animate-in" style={{ animationDelay: '0.4s' }}>
              <button onClick={openModal} className="cta-button text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold flex items-center justify-center gap-2 group">
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-3 justify-center lg:justify-start animate-in text-xs sm:text-sm text-gray-400" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>Limited slots available</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>No commitment required</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className="order-1 lg:order-2 animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-3xl aspect-[4/3] relative group overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 w-full">
              <iframe
                className="absolute inset-0 w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/2aYn_JnGY18?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1"
                title="Patient Transformation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />

              {/* Floating Stats */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/90 backdrop-blur border border-green-500/30 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 z-20 pointer-events-none">
                <div className="text-xl sm:text-2xl font-bold text-green-400">82%</div>
                <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">Save vs. US</div>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/90 backdrop-blur border border-blue-500/30 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 z-20 pointer-events-none">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">10,000+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">Patients Worldwide</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 proof-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Get Your Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <button type="submit" className="cta-button w-full text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group">
                  Submit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Before/After Preview */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="proof-card rounded-2xl p-4 text-center overflow-hidden">
                <div className="w-full aspect-square rounded-xl mb-3 overflow-hidden bg-gray-900">
                  <img
                    src="https://i.postimg.cc/kgBV4ZXv/Ekran-Resmi-2026-12-29-10-28-45.png"
                    alt="Before Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">Before</p>
                <p className="text-xs text-gray-500 mt-1">Missing teeth</p>
              </div>
              <div className="proof-card rounded-2xl p-4 text-center overflow-hidden">
                <div className="w-full aspect-square rounded-xl mb-3 overflow-hidden bg-gray-900">
                  <img
                    src="https://i.postimg.cc/ZKfBJZZr/Ekran-Resmi-2026-12-29-10-28-51.png"
                    alt="After Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">After</p>
                <p className="text-xs text-gray-500 mt-1">Perfect smile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      < section className="py-8 border-y border-white/10 bg-white/5 backdrop-blur-sm" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm text-gray-400">Patients Worldwide</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-white">$49.5K</div>
              <div className="text-sm text-gray-400">Average Savings</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Transparent Pricing</div>
            </div>
          </div>
        </div>
      </section >



      {/* Why Turkey Section */}
      < section id="section-why" className="py-16 sm:py-24 px-4 sm:px-6" >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Why US Citizens Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Turkey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Over 500,000 US citizens traveled abroad for dental care in 2023. Here's why Turkey is the #1 choice.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTurkey.map((item, i) => (
              <div
                key={i}
                className={`proof-card rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Form After Why Turkey */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="proof-card rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Ready to Start Your Journey?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button type="submit" className="cta-button w-full text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Premium Brands (Swapped) */}
      < section id="section-brands" className="py-16 sm:py-24 px-4 sm:px-6" >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-brands'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Titanium-Supported</span> Dentures
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Lightweight, durable, and biocompatible titanium implants for lasting comfort</p>
          </div>

          {/* Titanium Denture Image */}
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 ${isVisible['section-brands'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative rounded-3xl overflow-hidden">
              <img src={titaniumImg} alt="Titanium Denture" className="w-full h-auto object-cover" />
            </div>
          </div>


        </div>
      </section >

      {/* Testimonials */}
      < section id="section-testimonials" className="py-16 sm:py-24 px-4 sm:px-6" >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Real Stories from <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Real US Citizens</span>
            </h2>
            <p className="text-xl text-gray-400">Don't take our word for it. Here's what US patients say.</p>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${i === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}
              >
                <div className="gradient-border rounded-3xl p-8 sm:p-12">
                  <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold flex-shrink-0">
                      {testimonial.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.location} • {testimonial.procedure}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Clinic Showcase (Swapped) */}
      < section id="section-gallery" className="py-16 sm:py-24 px-4 sm:px-6" >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              State-of-the-Art <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Medical Facility</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">ISO-certified clinic in Istanbul with world-class equipment and US-trained surgeons</p>
          </div>

          <div className={`transition-all duration-1000 ${isVisible['section-gallery'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative rounded-3xl overflow-hidden group mb-12 max-w-full">
              <img src={clinicImg} alt="Medical Facility" className="w-full h-auto object-cover" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, title: 'ISO Certified', desc: 'International quality standards' },
                { icon: Shield, title: 'Warranty Certificate', desc: 'Written guarantee included' },
                { icon: Clock, title: 'Life-Long Quality', desc: 'Premium titanium implants designed to last' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="proof-card rounded-2xl p-6 flex items-start gap-4">
                    <Icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section >

      {/* Contact Form After Medical Facility */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="proof-card rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Experience World-Class Care</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button type="submit" className="cta-button w-full text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* US Support (Relocated) */}
      < section id="section-support" className="py-16 sm:py-24 px-4 sm:px-6" >
        <div className="max-w-6xl mx-auto">
          <div className={`gradient-border rounded-3xl p-8 sm:p-12 transition-all duration-1000 ${isVisible['section-support'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">US-Based Team</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                We're Not <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Just</span> in Turkey
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Meet with our specialists in the United States before and after your treatment. We're here for your entire journey.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 max-w-full relative">
                  <img src={usOfficeImg} alt="Our US Office" className="w-full h-auto object-cover aspect-video" />
                </div>
                <div className="flex items-center gap-3 justify-center bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-bold">363 Road 40201</div>
                    <div className="text-sm text-gray-400">111730 USA</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: 'Pre-Treatment Consultation', desc: 'Video call with our US team to plan your journey' },
                  { icon: Plane, title: 'During Your Stay', desc: '24/7 English support throughout your 8-night treatment' },
                  { icon: CheckCircle, title: 'US-Based Team', desc: 'Connect with our US support team anytime' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Final CTA */}
      < section id="section-cta" className="py-16 sm:py-32 px-4 sm:px-6" >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6 animate-pulse">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300">Only 12 Spots Left This Month</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Ready to Save <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$49,500</span> on Your Smile?
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book your free consultation now. No commitment. No credit card required. Just honest answers to all your questions.
            </p>

            <button onClick={openModal} className="cta-button text-white px-10 py-5 rounded-full text-xl font-bold inline-flex items-center gap-3 group mb-4">
              Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Response within 2 hours</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>100% Confidential</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Speak to US team</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t border-white/10 py-12 px-4 sm:px-6 bg-black/20 backdrop-blur-lg" >
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Esvita Clinic</h3>
              <p className="text-sm text-gray-400 mb-4">Premium All-on-4 dental implants with US-based support.</p>
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="font-semibold text-gray-300">Turkey Office</p>
                <p>Maslak Mh. Büyükdere Cd. Uso Center</p>
                <p>No: 245 Kat: 8 Istanbul / Turkey</p>
                <div className="pt-2">
                  <p className="text-green-400">Phone: +90 (545) 712 45 12</p>
                  <p className="text-blue-400">E-Mail: info@esvitaclinic.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">US Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>363 Road 40201, 111730 USA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 Esvita Clinic. All rights reserved. Medical tourism services provided in partnership with accredited facilities.</p>
          </div>
        </div>
      </footer >

      {/* Modal */}
      {
        showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full border border-gray-700" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Get Your Free Consultation</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-white">✕</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <button type="submit" className="cta-button w-full text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group">
                  Submit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        )
      }

      {/* Floating Chat Widgets */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905457124512"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Facebook Messenger Button */}
        <a
          href="https://m.me/YOUR_FACEBOOK_PAGE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on Messenger"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on Messenger
          </span>
        </a>
      </div>
    </div >
  );
};

export default EsvitaLanding;