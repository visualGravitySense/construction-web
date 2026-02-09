import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Sparkles, Clock, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const contactMethods = [
    {
      id: 1,
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: 'Betoonväljak 1\n10115 Tallinn, Eesti',
      link: 'https://maps.google.com/?q=Betoonv%C3%A4ljak+1,+10115+Tallinn,+Estonia',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorderColor: 'hover:border-blue-400',
      action: 'Vaata kaardil'
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      content: '+372 1234 5678',
      link: 'tel:+37212345678',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorderColor: 'hover:border-green-400',
      action: 'Helista kohe'
    },
    {
      id: 3,
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@ecobeton.ee',
      link: 'mailto:info@ecobeton.ee',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBorderColor: 'hover:border-purple-400',
      action: 'Saada email'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0">
        <img 
          src="/pattern-1.jpg" 
          alt="Pattern background"
          className="w-full h-full object-cover"
        />
        {/* Градиентный overlay для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/75 to-white/80"></div>
        {/* Дополнительный светлый overlay */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Мотивация: Визуальный акцент */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Kontakt</span>
            </div>
            <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-300">
              DEMO — Placeholder
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-md">
            Võta meiega ühendust
          </h2>
          <p className="text-xl text-gray-700 mb-6 drop-shadow-sm">
            Oleme abiks kõigis ehitusalastes küsimustes
          </p>

          {/* Мотивация: Социальное доказательство */}
          <div className="inline-flex items-center gap-4 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">Vastame 24h jooksul</span>
            </div>
            <div className="w-px h-6 bg-green-200"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">Tasuta konsultatsioon</span>
            </div>
          </div>
        </div>
        
        {/* Способность: Улучшенная сетка контактов */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const isHovered = hoveredCard === method.id;
            const delay = index * 100;

            return (
              <div
                key={method.id}
                className={`bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border-2 transition-all duration-300 group cursor-pointer ${
                  isHovered 
                    ? `${method.borderColor.replace('border-', 'border-')} shadow-2xl scale-105` 
                    : `${method.borderColor} ${method.hoverBorderColor} hover:shadow-xl`
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Мотивация: Иконка с градиентом */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>

                {/* Способность: Заголовок */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>

                {/* Способность: Контент */}
                <p className="text-gray-600 mb-4 text-center whitespace-pre-line leading-relaxed">
                  {method.id === 1 ? (
                    <>
                      Betoonväljak 1<br />
                      10115 Tallinn, Eesti
                    </>
                  ) : (
                    <a 
                      href={method.link} 
                      className="hover:text-blue-600 transition-colors font-medium"
                    >
                      {method.content}
                    </a>
                  )}
                </p>

                {/* Подсказки: Кнопка действия */}
                <a
                  href={method.link}
                  target={method.id === 1 ? '_blank' : undefined}
                  rel={method.id === 1 ? 'noopener noreferrer' : undefined}
                  className={`block w-full ${method.bgColor} border ${method.borderColor} rounded-lg px-4 py-3 text-center font-medium text-gray-700 hover:bg-opacity-80 transition-all group/btn ${
                    isHovered ? 'scale-105' : ''
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{method.action}</span>
                    {method.id === 1 ? (
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </div>
                </a>

                {/* Мотивация: Визуальный индикатор */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${method.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Подсказки: Улучшенная CTA кнопка */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/kontakt">
              <span>Kontakteeru meiega</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          {/* Мотивация: Дополнительная информация */}
          <p className="text-gray-500 text-sm mt-4">
            Või <Link to="/kontakt" className="text-blue-600 hover:text-blue-700 font-medium underline">täida kontaktvorm</Link> ja me võtame teiega ühendust
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
