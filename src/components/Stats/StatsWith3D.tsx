/**
 * ПРИМЕР: Модифицированный Stats компонент с поддержкой 3D иконок
 * 
 * Этот файл показывает, как можно добавить поддержку 3D иконок
 * в существующий компонент Stats
 */

import { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

// Добавьте поле icon3D для каждого элемента
const stats = [
  { 
    value: "12+", 
    label: "Aastat kogemust",
    icon: TrendingUp,
    icon3D: "/3d-icons/trending-up-3d.png", // ← Добавьте путь к 3D иконке
    iconColor: "bg-blue-500",
    description: "Pikaajaline kogemus",
    use3D: true // ← Флаг для переключения между обычной и 3D иконкой
  },
  { 
    value: "100+", 
    label: "Edukalt projekti",
    icon: CheckCircle,
    icon3D: "/3d-icons/check-circle-3d.png",
    iconColor: "bg-green-500",
    description: "Edukalt lõpetatud",
    use3D: true
  },
  { 
    value: "100%", 
    label: "Klientide rahulolu",
    icon: Users,
    icon3D: "/3d-icons/users-3d.png",
    iconColor: "bg-purple-500",
    description: "Rahulolevad kliendid",
    use3D: true
  },
  { 
    value: "2x", 
    label: "Aasta Betoonehitis",
    icon: Award,
    icon3D: "/3d-icons/award-3d.png",
    iconColor: "bg-yellow-500",
    description: "Tunnustatud kvaliteet",
    use3D: true
  }
];

const StatsWith3D = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState<Array<{ value: string | number; animated: boolean }>>(
    stats.map(() => ({ value: 0, animated: false }))
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
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
      className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Meie saavutused
          </h2>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
            Numbrid, mis räägivad meie kvaliteedist ja usaldusväärsusest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, i) => {
            const displayValue = countedStats[i]?.value || stat.value;
            const isAnimated = countedStats[i]?.animated !== false;
            const IconComponent = stat.icon;

            return (
              <div 
                key={i} 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full">
                  {/* Иконка - поддержка 3D и обычных */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 ${stat.iconColor} rounded-xl mb-6 shadow-lg p-2`}>
                    {stat.use3D && stat.icon3D ? (
                      // 3D иконка
                      <img 
                        src={stat.icon3D} 
                        alt={stat.label}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback на обычную иконку, если 3D не загрузилась
                          console.warn(`3D icon not found: ${stat.icon3D}, using regular icon`);
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'text-white';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      // Обычная иконка (fallback)
                      <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    )}
                  </div>

                  <div 
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 transition-all duration-300 ${
                      isAnimated ? 'scale-100' : 'scale-110'
                    }`}
                  >
                    {displayValue}
                  </div>

                  <div className="text-white/90 font-medium text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-white text-lg lg:text-xl mb-6 font-medium">
            Oled valmis alustama oma projekti?
          </p>
          <Button 
            asChild 
            className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600 rounded-lg px-8 py-6 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
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

export default StatsWith3D;
