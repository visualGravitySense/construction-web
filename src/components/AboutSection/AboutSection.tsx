import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Star, 
  Clock, 
  Phone,
  Heart,
  Leaf,
  Users,
  Gem,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button"
import './AboutSection.css'

const advantages = [
  { 
    title: "Usaldusväärsus ja kvaliteet",
    description: "Tipptasemel kvaliteet ja paindlikkus klientidega suhtlemisel",
    icon: Shield,
    iconColor: "text-gray-500",
    iconBg: "bg-gray-100"
  },
  { 
    title: "Tervislik töökeskkond",
    description: "Väärtustame elutervet ja meeldivat töökeskkonda",
    icon: Heart,
    iconColor: "text-gray-500",
    iconBg: "bg-gray-100"
  },
  { 
    title: "Ökoloogiline lähenemine",
    description: "Minimaliseerime oma tegemiste ökoloogilist jalajälge",
    icon: Leaf,
    iconColor: "text-green-600",
    iconBg: "bg-green-50"
  },
  { 
    title: "Kogenud spetsialistid",
    description: "Meeskonnas töötavad oma ala tundvad professionaalid",
    icon: Users,
    iconColor: "text-gray-500",
    iconBg: "bg-gray-100"
  }
];

const AboutSection = () => {
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
    <section 
      ref={sectionRef}
      className="about-section-reference py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Concrete texture background */}
      <div className="absolute inset-0 bg-[#e8e9eb]" />
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      {/* Subtle geometric accents - left */}
      <div className="absolute left-0 top-1/4 w-48 h-48 bg-gray-300/20 rounded-lg transform -rotate-12 hidden lg:block" />
      <div className="absolute left-4 top-1/3 w-24 h-24 bg-gray-400/15 rounded-md transform rotate-6 hidden lg:block" />
      {/* Subtle geometric accents - right */}
      <div className="absolute right-0 top-1/3 w-32 h-32 bg-gray-300/20 rounded-lg transform rotate-12 hidden lg:block" />
      <div className="absolute right-8 bottom-1/4 w-16 h-16 bg-gray-400/15 rounded-md hidden lg:block" />
      {/* Vertical lines */}
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-300/30 hidden xl:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-400/20 translate-x-4 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Tabs - Meie lugu + Alates 2012 */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-500/30">
                <Sparkles className="w-4 h-4" />
                Meie lugu
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="font-medium">Alates 2012. aastast</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Meist
            </h2>
            
            <div className="space-y-5 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                EcoBeton Grupp OÜ on 2012. aastal loodud ehitusettevõte, mille peamisteks 
                tegutsemisvaldkondadeks on üldehitus, betoonitööd, ehitusjuhtimine ning 
                nii elamute kui ka muude ehitiste projekteerimine.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Meie pidevalt areneva, jätkusuutliku ja konkurentsivõimelise ettevõtte 
                eesmärk on pakkuda usaldusväärset ja kõrge kvaliteediga teenust nii 
                Eestis kui ka teistes Balti ja Skandinaavia riikides.
              </p>

              {/* Usaldusväärne partner box - light grey rounded */}
              <div className="flex items-start gap-4 p-6 bg-gray-100/80 backdrop-blur-sm rounded-2xl border border-gray-200/80">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-base mb-2">Usaldusväärne partner</p>
                  <p className="text-gray-700 text-sm mb-2">12+ aastat kogemust ja 100+ edukat projekti</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      4.9/5 hinnang
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Garantii kvaliteedile
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                asChild 
                size="lg" 
                className="text-base lg:text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Link to="/meist" className="flex items-center">
                  <span>Loe rohkem</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base lg:text-lg px-8 py-6 border-2 border-gray-400 text-gray-700 hover:border-gray-500 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
              >
                <a href="tel:+37212345678" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Helista</span>
                </a>
              </Button>
            </div>

            {/* Footer links - small grey with icons */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5" />
                Kiire vastus
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Usaldusväärne
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                Tasuta konsultatsioon
              </span>
            </div>
          </div>
          
          {/* Right column - 2x2 frosted glass cards */}
          <div className={`grid grid-cols-2 gap-5 lg:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className={`about-card-glass bg-white/60 backdrop-blur-xl p-6 lg:p-7 rounded-2xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group ${
                    isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : ''
                  }`}
                  style={{ 
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${advantage.iconBg} mb-4`}>
                    <IconComponent className={`w-7 h-7 ${advantage.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
