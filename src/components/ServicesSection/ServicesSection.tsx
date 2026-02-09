import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"

const topServices = [
  {
    title: 'Peatöövõtt ja projektijuhtimine',
    description: 'Oleme oma klientidele partner, kes leiab innovaatilisi ja optimaalseid lahendusi kiirelt ja kvaliteetselt. Meie meeskond tagab täieliku projektijuhtimise, kvaliteetse täitmise ja ajagraafiku järgimise.',
    benefits: ['Projektijuhtimine', 'Ehitusjuhtimine', 'Peatöövõtt ja projektijuhtimine', 'Montaažitööde juhtimine'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    title: 'Ehitusalane konsultatsioon',
    description: 'Nõustame tellijat kõigis ehitusalastes küsimustes alates ehitusprotsessi ettevalmistamisest kuni lõpuni. Pakume professionaalset nõustamist kogenud spetsialistidelt.',
    benefits: ['Tasuta esialgne konsultatsioon', 'Kogenud spetsialistid', 'Individuaalne lähenemine', 'Täielik projekti analüüs'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    title: 'Betooni- ja montaažitööd',
    description: 'Oleme teinud väga palju betooni- ja montaažitöid nii suurtele peatöövõtjatele kui eraklientidele. Tagame kõrge kvaliteedi, kiire täitmise ja konkurentsivõimelise hinna.',
    benefits: ['Kõrge kvaliteet', 'Kiire täitmine', 'Konkurentsivõimeline hind', 'Kvaliteedikontroll'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
  }
];

const statsBar = [
  { value: '100+', label: 'EDUKAT PROJEKTI' },
  { value: '12+', label: 'AASTAT KOGEMUST' },
  { value: '4.9/5', label: 'KLIENDI HINNANG' },
  { value: '100%', label: 'GARANTII' }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#1a1d24] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — reference: brand, title, subtitle */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">ECOBETON GRUPP</p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase mb-4">
            Teenused ja tegutsemisvaldkonnad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            EcoBeton Grupp pakub moodsad teenused ja tegutsemisvaldkonnad
          </p>
        </div>

        {/* Statistics bar — bold white numbers, green underline */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-16">
          {statsBar.map((stat, i) => (
            <div 
              key={i} 
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80 text-sm uppercase tracking-wide mt-1">{stat.label}</div>
              <div className="mt-2 h-1 w-12 mx-auto bg-green-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Service cards — dark charcoal, B&W image, green accents */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {topServices.map((service, i) => (
            <div
              key={i}
              className={`group bg-[#252830] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card title at top */}
              <div className="px-6 pt-6">
                <h3 className="text-lg font-bold text-white uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Image — grayscale with green glow overlay */}
              <div className="relative h-48 overflow-hidden mt-4 mx-4 rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252830] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500/80" />
                <div className="absolute top-2 right-2 w-16 h-px bg-green-500/60 transform rotate-45" />
                <div className="absolute bottom-4 left-2 w-12 h-px bg-green-500/40" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Buttons — Loe rohkem (green), Küsi pakkumist (outline) */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-green-500 hover:bg-green-600 text-white rounded-lg">
                    <Link to="/teenused" className="flex items-center justify-center gap-2">
                      <span>Loe rohkem</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-500 bg-white text-green-600 hover:bg-green-50 hover:text-green-700 rounded-lg">
                    <Link to="/kontakt" className="flex items-center justify-center gap-2">
                      Küsi pakkumist
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Vaata kõiki teenuseid */}
        <div className={`text-center mt-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-6 text-base font-semibold">
            <Link to="/teenused" className="flex items-center gap-2">
              <span>Vaata kõiki teenuseid</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
