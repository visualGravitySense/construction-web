import { Star, Quote, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Henri Ärmus',
    position: 'Projektijuht',
    company: 'MERKO EHITUS EESTI AS',
    text: 'Võimekas, asjatundlik ja paindliku lähenemisega koostööpartner! Meeskonnas töötavad oma ala tundvad spetsialistid, kelle kätte võib usaldada keerulised ja pingelise ajagraafikuga ehitusprojektid.',
    rating: 5,
    highlight: 'Usaldusväärne partner'
  },
  {
    id: 2,
    name: 'Kristo Koger',
    position: 'CEO',
    company: 'WALDHOFF ÄRIMAJA',
    text: 'Meie kui tellija oleme positiivselt üllatunud nende operatiivsuses. Tegu on ettevõttega, kes on huvitatud töö tegemisest. Kindlasti oleme oma tulevastes projektides avatud koostööle.',
    rating: 5,
    highlight: 'Operatiivne'
  },
  {
    id: 3,
    name: 'Ilja Jevlanov',
    position: 'Direktor',
    company: 'ENSKA EHITUS OÜ',
    text: 'Nende tööstiilis on ühendatud loovus, konkreetsus ja väga suur entusiasm, mis on võtmekomponendid selleks, et millegi säravaga hakkama saada. Nad on paindlikud ja leidlikud.',
    rating: 5,
    highlight: 'Loovus ja entusiasm'
  },
  {
    id: 4,
    name: 'Kristo Leede',
    position: 'Projektijuht',
    company: 'NORDECON AS',
    text: 'Korralik firma. Tark omanik.',
    rating: 5,
    highlight: 'Professionaalne'
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
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
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Мотивация: Визуальный акцент */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Klientide arvamused</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mida meie kliendid ütlevad
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Meie kliendid on meie parim tunnistus
          </p>

          {/* Мотивация: Социальное доказательство */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-yellow-50 border border-blue-200 rounded-lg px-6 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-900">100% klientide rahulolu</span>
            </div>
            <div className="w-px h-6 bg-blue-200"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">100+ edukat projekti</span>
            </div>
          </div>
        </div>

        {/* Способность: Улучшенная сетка отзывов */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredTestimonial === testimonial.id;
            const delay = index * 100;

            return (
              <div
                key={testimonial.id}
                className={`bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border-2 transition-all duration-300 group cursor-pointer ${
                  isHovered 
                    ? 'border-blue-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                {/* Мотивация: Иконка цитаты */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Quote className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Мотивация: Рейтинг */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 transition-all duration-300 ${
                          isHovered 
                            ? 'fill-yellow-400 text-yellow-400 scale-110' 
                            : 'fill-yellow-400 text-yellow-400'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Способность: Текст отзыва */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed relative pl-4 border-l-4 border-blue-200 group-hover:border-blue-500 transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Мотивация: Хайлайт при наведении */}
                {isHovered && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-900 font-medium">{testimonial.highlight}</span>
                    </div>
                  </div>
                )}

                {/* Мотивация: Информация об авторе */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {testimonial.position}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Подсказки: Визуальный индикатор */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Подсказки: Дополнительная мотивация */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-yellow-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 text-lg mb-3">
              <span className="font-semibold text-gray-900">Kas oled valmis alustama oma projekti?</span>
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
            >
              <span>Võta meiega ühendust</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
