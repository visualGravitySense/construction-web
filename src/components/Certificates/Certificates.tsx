import { Link } from 'react-router-dom';
import { Trophy, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"

const certifications = [
  'ISO 9001 Kvaliteedijuhtimissüsteem',
  'ISO 14001 Keskkonnajuhtimissüsteem',
  'Eesti Betooniühingu Liige',
  'Tunnustatud Betoonehitaja'
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#1a1d24] relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`,
        backgroundColor: '#141619'
      }}
    >
      {/* Concrete texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Glass display case with award */}
          <div
            className={`flex flex-col items-center lg:items-start transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Glass display case */}
            <div className="relative p-8 lg:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 rounded-2xl border border-white/5" />
              {/* Award with neon green glow */}
              <div
                className="relative inline-flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#2a2d35]"
                style={{
                  boxShadow: '0 0 30px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.2), inset 0 0 20px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(74,222,128,0.6)'
                }}
              >
                <Trophy
                  className="w-16 h-16 lg:w-20 lg:h-20 text-amber-400/90"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(34,197,94,0.5))' }}
                />
              </div>
            </div>

            {/* Metallic award text */}
            <h3
              className="mt-6 text-2xl lg:text-3xl font-bold text-white/90 tracking-tight"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.1)',
                letterSpacing: '-0.02em'
              }}
            >
              2x Aasta Betoonehitis
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Juba 2 aastat järjest pärjatud Aasta Betoonehitise auhinnaga
            </p>
          </div>

          {/* Vertical neon green divider between columns */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-px h-2/3 min-h-[200px] bg-green-500/40 rounded-full" style={{ boxShadow: '0 0 20px rgba(34,197,94,0.4)' }} />

          {/* Right — Certifications list */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Barcode/digital pattern — top */}
            <div className="flex gap-0.5 mb-6 h-3 items-end">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[2px] bg-green-500/70 rounded-sm"
                  style={{
                    height: `${2 + (i % 7)}px`,
                    boxShadow: '0 0 6px rgba(34,197,94,0.5)'
                  }}
                />
              ))}
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
              Tunnustused ja sertifikaadid
            </h2>

            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-4">
                  {/* Neon green checkbox */}
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-md border-2 border-green-500 flex items-center justify-center"
                    style={{
                      boxShadow: '0 0 12px rgba(34,197,94,0.4), inset 0 0 8px rgba(34,197,94,0.1)'
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-green-400" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 4px rgba(74,222,128,0.8))' }} />
                  </div>
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* Barcode/digital pattern — bottom */}
            <div className="flex gap-0.5 mt-8 h-3 items-end">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[2px] bg-green-500/70 rounded-sm"
                  style={{
                    height: `${2 + ((i + 3) % 6)}px`,
                    boxShadow: '0 0 6px rgba(34,197,94,0.5)'
                  }}
                />
              ))}
            </div>

            {/* Vertical neon green line — right edge */}
            <div
              className="absolute -right-4 top-0 bottom-0 w-1 bg-green-500/40 rounded-full hidden lg:block"
              style={{ boxShadow: '0 0 20px rgba(34,197,94,0.3)' }}
            />

            {/* CTA */}
            <div className="mt-10">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-500 text-white border-0">
                <Link to="/meist">
                  <span>Vaata sertifikaate</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
