import { CheckCircle, Award, Shield, Heart, Leaf, TrendingUp, Users, Handshake, Rocket, Clock, Star, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const advantages = [
  { text: "Usaldusväärsus, tipptasemel kvaliteet ja paindlikkus klientidega suhtlemisel", icon: Shield },
  { text: "Väärtustame elutervet ja meeldivat töökeskkonda", icon: Heart },
  { text: "Peame oluliseks minimaliseerida oma tegemiste ökoloogilist jalajälge", icon: Leaf },
  { text: "12+ aastat kogemust ja sadu edukalt lõpetatud projekte", icon: TrendingUp },
  { text: "Valmis koostööks teiste ehitusfirmadega", icon: Handshake },
  { text: "Meeskonnas töötavad oma ala tundvad spetsialistid", icon: Users }
];

const recognitions = [
  { value: "2x Aasta", label: "Betoonehitis auhind" },
  { value: "100+", label: "edukat projekti" },
  { value: "100%", label: "klientide rahulolu" }
];

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#1a1d24] relative overflow-hidden">
      {/* Vertical stripes on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-20 hidden lg:block">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-600" />
        <div className="absolute right-4 top-0 bottom-0 w-px bg-gray-600" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-gray-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — Miks valida meid? */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700/80 text-white text-sm">
                <Rocket className="w-4 h-4 text-green-400" />
                Meie eelised
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700/80 text-white text-sm">
                <Clock className="w-4 h-4 text-green-400" />
                Kiire vastus 24h jooksul
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Miks valida meid?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Meie suurimaks konkurentsieelisaks on usaldusväärsus, tipptasemel kvaliteet ja paindlikkus
            </p>

            {/* First card — highlighted with green glow */}
            <div className="relative p-6 rounded-2xl bg-white mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)] border-2 border-green-500/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg mb-1">Usaldusväärne partner</p>
                  <p className="text-gray-700 text-sm mb-2">12+ aastat kogemust ja 100+ edukat projekti</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      4.9/5 hinnang
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      2x Aasta Betoonehitis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other benefit cards — white with dark border, black icons */}
            <div className="space-y-3 mb-8">
              {advantages.map((adv, i) => {
                const IconComp = adv.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-gray-800" strokeWidth={2} />
                    </div>
                    <span className="text-gray-800 text-base leading-relaxed pt-2">
                      {adv.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-xl">
                <Link to="/meist" className="flex items-center gap-2">
                  <span>Loe rohkem meie väärtustest</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-500 bg-transparent text-white hover:bg-gray-700 rounded-xl">
                <a href="tel:+37212345678" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Helista kohe</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right column — Tunnustused */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-800 border border-gray-700 mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Tunnustused</h3>
            </div>

            {/* Achievement blocks — dark with neon green strip */}
            <div className="space-y-4">
              {recognitions.map((rec, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between p-6 rounded-xl bg-[#252830] border border-gray-700 overflow-hidden"
                >
                  <div className="flex-1">
                    <div className="text-2xl lg:text-3xl font-bold text-white">{rec.value}</div>
                    <div className="text-gray-400 text-sm">{rec.label}</div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-green-500" />
                </div>
              ))}
            </div>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 mt-8 text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              <span>Võta meiega ühendust</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
