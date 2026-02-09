import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Trophy, Star, Target, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const stats = [
  { value: "12+", label: "Aastat kogemust", icon: Star },
  { value: "100+", label: "Edukat projekti", icon: Target },
  { value: "100%", label: "Klientide rahulolu", icon: Heart },
  { value: "2x", label: "Aasta Betoonehitis", icon: Trophy }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState<Array<{ value: string | number; animated: boolean }>>(
    stats.map(() => ({ value: 0, animated: false }))
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Анимация счетчиков
            stats.forEach((stat, index) => {
              const numericValue = parseInt(stat.value.replace(/\D/g, ''));
              if (numericValue > 0 && !countedStats[index].animated) {
                animateCounter(index, numericValue, stat.value);
              } else {
                setCountedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = { value: stat.value, animated: true };
                  return newStats;
                });
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateCounter = (index: number, target: number, originalValue: string) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        setCountedStats(prev => {
          const newStats = [...prev];
          newStats[index] = { value: originalValue, animated: true };
          return newStats;
        });
      } else {
        setCountedStats(prev => {
          const newStats = [...prev];
          const prefix = originalValue.includes('+') ? '+' : originalValue.includes('%') ? '%' : originalValue.includes('x') ? 'x' : '';
          newStats[index] = { value: `${Math.floor(current)}${prefix}`, animated: false };
          return newStats;
        });
      }
    }, duration / steps);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Light grey concrete-textured background — reference */}
      <div className="absolute inset-0 bg-[#e8e9eb]" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4">
            Meie saavutused
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Numbrid, mis räägivad meie kvaliteedist ja usaldusväärsusest
          </p>
        </div>

        {/* Statistics cards — white cards with green icons, reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {stats.map((stat, i) => {
            const displayValue = countedStats[i]?.value || stat.value;
            const isAnimated = countedStats[i]?.animated !== false;
            const IconComponent = stat.icon;

            return (
              <div 
                key={i} 
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* White card — rounded, soft shadow */}
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 h-full flex flex-col items-center text-center">
                  {/* Green outline icon */}
                  <div className="mb-6">
                    <IconComponent 
                      className="w-12 h-12 lg:w-14 lg:h-14 text-green-500" 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Value — large bold dark grey */}
                  <div 
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-2 transition-all duration-300 ${
                      isAnimated ? 'scale-100' : 'scale-110'
                    }`}
                  >
                    {displayValue}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 text-lg lg:text-xl mb-6 font-medium">
            Oled valmis alustama oma projekti?
          </p>
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-xl px-8 py-6 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <Link to="/kontakt" className="flex items-center gap-2">
              Võta ühendust
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
