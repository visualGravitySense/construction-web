import { Link, useLocation } from 'react-router-dom';
import { Building2, Lightbulb, Hammer, Wrench, Users, Truck, ArrowRight, CheckCircle, Sparkles, Star, Shield, Clock, Phone, Zap, Award, TrendingUp, ArrowLeft, MessageSquare, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPublicUrl } from "@/lib/utils"
import './Services.css';

const services = [
  {
    id: 'peatöövõtt',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Peatöövõtt ja projektijuhtimine',
    shortDescription: 'Oleme oma klientidele partner, kes leiab innovaatilisi ja optimaalseid lahendusi kiirelt ja kvaliteetselt.',
    fullDescription: 'Oleme oma klientidele partner, kes leiab innovaatilisi ja optimaalseid lahendusi kiirelt ja kvaliteetselt. Meie meeskond tagab täieliku projektijuhtimise, kvaliteetse täitmise ja ajagraafiku järgimise. Töötame nii suurtele peatöövõtjatele kui eraklientidele, pakkudes lahendusi, mis vastavad kõigile nende vajadustele.',
    benefits: [
      'Täielik projektijuhtimine',
      'Kvaliteetne täitmine',
      'Ajagraafiku järgimine',
      'Kogenud meeskond',
      'Individuaalne lähenemine'
    ],
    features: [
      'Projekti planeerimine ja koordineerimine',
      'Tööde täitmine vastavalt standarditele',
      'Kvaliteedikontroll igal etapil',
      'Regulaarne kommunikatsioon klientiga'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    image: getPublicUrl('peatoovott-ja-projektijuhtimine.jpg')
  },
  {
    id: 'ehitusalane-konsultatsioon',
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Ehitusalane konsultatsioon',
    shortDescription: 'Nõustame tellijat kõigis ehitusalastes küsimustes alates ehitusprotsessi ettevalmistamisest kuni lõpuni.',
    fullDescription: 'Nõustame tellijat kõigis ehitusalastes küsimustes alates ehitusprotsessi ettevalmistamisest kuni lõpuni. Meie kogenud spetsialistid pakuvad tasuta konsultatsiooni ja individuaalset lähenemist. Aitame teil leida optimaalseid lahendusi, mis vastavad teie eelarvele ja vajadustele.',
    benefits: [
      'Tasuta konsultatsioon',
      'Kogenud spetsialistid',
      'Individuaalne lähenemine',
      'Kiire vastus',
      'Praktilised lahendused'
    ],
    features: [
      'Ehitusprotsessi planeerimine',
      'Materjalide valik ja soovitused',
      'Eelarve koostamine',
      'Tehnilised nõuanded'
    ],
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    image: getPublicUrl('ehitusalane-konsultatsioon.jpg')
  },
  {
    id: 'betoonitööd',
    icon: <Hammer className="w-8 h-8" />,
    title: 'Betooni- ja montaažitööd',
    shortDescription: 'Oleme teinud väga palju betooni- ja montaažitöid nii suurtele peatöövõtjatele kui eraklientidele.',
    fullDescription: 'Oleme teinud väga palju betooni- ja montaažitöid nii suurtele peatöövõtjatele kui eraklientidele. Tagame kõrge kvaliteedi, kiire täitmise ja konkurentsivõimelise hinna. Meie meeskond omab pikaajalist kogemust erinevate betoonitööde täitmisel.',
    benefits: [
      'Kõrge kvaliteet',
      'Kiire täitmine',
      'Konkurentsivõimeline hind',
      'Kogenud meeskond',
      'Kaasaegsed meetodid'
    ],
    features: [
      'Betooni valamine ja töötlemine',
      'Montaažitööd',
      'Kvaliteedikontroll',
      'Garantii töödele'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    image: getPublicUrl('betooni-ja-montaazitood.jpg')
  },
  {
    id: 'betoonpõrandad',
    icon: <Wrench className="w-8 h-8" />,
    title: 'Betoonpõrandad',
    shortDescription: 'Omame pikaajalist töökogemust betoonpõrandate valamisel. Tagame kõrgkvaliteetse tulemuse.',
    fullDescription: 'Omame pikaajalist töökogemust betoonpõrandate valamisel. Tagame kõrgkvaliteetse tulemuse, mis vastab kõigile standarditele. Meie meeskond kasutab kaasaegseid meetodeid ja kvaliteetseid materjale, et tagada pikaajaline tulemus.',
    benefits: [
      '12+ aastat kogemust',
      'Garantii kvaliteedile',
      'Kaasaegsed meetodid',
      'Kvaliteetsed materjalid',
      'Pikaajaline tulemus'
    ],
    features: [
      'Betoonpõrandate valamine',
      'Tasandamine ja viimistlus',
      'Kvaliteedikontroll',
      'Garantii töödele'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    image: getPublicUrl('betoonporandad.jpg')
  },
  {
    id: 'omanikujärelvalve',
    icon: <Users className="w-8 h-8" />,
    title: 'Omanikujärelvalve',
    shortDescription: 'Esindame ja kaitseme tellija huve ehitusprotsessis, kindlustame kvaliteedi ja tööde kulgemise.',
    fullDescription: 'Esindame ja kaitseme tellija huve ehitusprotsessis, kindlustame kvaliteedi ja tööde kulgemise. Meie meeskond jälgib pidevalt protsessi, kontrollib kvaliteeti ja tagab, et kõik tööd tehakse vastavalt kokkulepitud tingimustele.',
    benefits: [
      'Tellija huvide kaitsmine',
      'Kvaliteedi kontroll',
      'Protsessi jälgimine',
      'Regulaarne raporteerimine',
      'Probleemide lahendamine'
    ],
    features: [
      'Tööde jälgimine',
      'Kvaliteedikontroll',
      'Dokumenteerimine',
      'Kommunikatsioon kõigi osapooltega'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    image: getPublicUrl('omanikujarelvalve.jpg')
  },
  {
    id: 'transporditeenus',
    icon: <Truck className="w-8 h-8" />,
    title: 'Transporditeenus',
    shortDescription: 'Oma tõstekraanadega varustatud masinate abil transpordime suuri detaile ja ehitusmaterjale.',
    fullDescription: 'Oma tõstekraanadega varustatud masinate abil transpordime suuri detaile ja ehitusmaterjale. Tagame kiire kohaletoimetamise ja turvalise transpordi. Meie tehnika on regulaarselt hooldatud ja vastab kõigile ohutusnõuetele.',
    benefits: [
      'Oma tehnika',
      'Kiire kohaletoimetamine',
      'Turvaline transport',
      'Kogenud juhid',
      'Sobivad hinnad'
    ],
    features: [
      'Suurte detailide transport',
      'Ehitusmaterjalide transport',
      'Tõstekraanade teenus',
      'Kohaletoimetamine ajakohaselt'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    image: getPublicUrl('transporditeenused.jpg')
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Функция для прокрутки к элементу
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash);
      if (element) {
        // Учитываем высоту sticky header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Проверка hash при загрузке страницы
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Небольшая задержка для рендеринга контента
        setTimeout(() => {
          scrollToElement(hash);
        }, 300);
      }
    };

    // Проверка пути для автоматической прокрутки к услуге
    // Если путь /transporditeenus, прокручиваем к секции transporditeenus
    if (location.pathname === '/transporditeenus') {
      setTimeout(() => {
        scrollToElement('transporditeenus');
      }, 300);
    }

    // Обработка hash при загрузке
    handleHashChange();

    // Обработка изменения hash (при клике на ссылку)
    window.addEventListener('hashchange', handleHashChange);

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
      window.removeEventListener('hashchange', handleHashChange);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="services-page min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Meie teenused
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Teenused ja tegutsemisvaldkonnad
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Anname endast iga päev maksimumi, püüeldes <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">täiusliku tulemuse</span> ja <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">kõrge kvaliteedi</span> poole. 
              Oleme teie <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">usaldusväärne partner</span> kõigis ehitusalastes küsimustes.
            </p>

            {/* PROMPTS: Анимированный бейдж для мотивации */}
            <div className="mb-8 flex justify-center">
              <Badge className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 mr-2" />
                Tasuta konsultatsioon - Vastame 24h jooksul!
              </Badge>
            </div>

            {/* MOTIVATION: Расширенное социальное доказательство */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <Award className="w-6 h-6 text-yellow-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Tunnustus</div>
                  <div className="text-sm font-bold text-gray-900">2x Aasta Betoonehitis</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Projekte</div>
                  <div className="text-sm font-bold text-gray-900">100+ edukalt</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
                <Clock className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Kogemus</div>
                  <div className="text-sm font-bold text-gray-900">12+ aastat</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Hinnang</div>
                  <div className="text-sm font-bold text-gray-900">4.9/5 ⭐</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
                <Shield className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Garantii</div>
                  <div className="text-sm font-bold text-gray-900">100% kvaliteet</div>
                </div>
              </div>
            </div>

            {/* ABILITY: Множественные простые пути контакта */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all">
                <Link to="/kontakt">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Küsi pakkumist
                </Link>
              </Button>
              {/* PROMPTS: Улучшенная кнопка "Helista kohe" с BJ Fogg элементами */}
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden group"
              >
                <a href="tel:+37212345678" className="relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-bold">Helista kohe</span>
                    <Zap className="w-4 h-4 animate-pulse" />
                  </div>
                  {/* PROMPTS: Анимированный фон */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 hover:bg-gray-50">
                <Link to="/referentsid">
                  Vaata projekte
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* PROMPTS: Визуальные подсказки */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <ArrowRight className="w-4 h-4 animate-bounce" />
              <span>Kerige allapoole, et näha kõiki teenuseid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PROMPTS: Заголовок секции с подсказкой */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Kõik meie teenused
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vali oma projektile sobiv teenus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pakume <span className="font-semibold text-green-600">tasuta konsultatsiooni</span> ja <span className="font-semibold text-blue-600">kiiret vastust</span> kõigis ehitusalastes küsimustes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                id={service.id}
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Фоновое изображение */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                </div>

                {/* Иконка в углу */}
                <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <CardHeader className="relative pt-32 pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  {/* MOTIVATION: Преимущества с визуальными акцентами */}
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white group/benefit">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 text-white group-hover/benefit:scale-110 transition-transform`} />
                        <span className={benefit.toLowerCase().includes('tasuta') ? 'font-semibold text-green-300' : 
                                        benefit.toLowerCase().includes('kvaliteet') ? 'font-semibold text-blue-200' : 
                                        benefit.toLowerCase().includes('kogenud') ? 'font-semibold text-purple-200' : 'text-white'}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ABILITY: Улучшенная кнопка быстрого звонка с BJ Fogg элементами */}
                  <Button
                    asChild
                    size="sm"
                    className="w-full text-sm font-semibold text-white bg-gradient-to-r from-green-500/90 to-emerald-600/90 hover:from-green-500 hover:to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden group"
                  >
                    <a href="tel:+37212345678" className="relative z-10 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Kiire kõne</span>
                      <Zap className="w-3 h-3 animate-pulse" />
                      {/* PROMPTS: Анимированный фон */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist Design */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${getPublicUrl('why-choose-us.jpg')})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-purple-600/90"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valmis alustama oma projekti?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Võta meiega ühendust ja saame koos leida parima lahenduse teie projektile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-base px-8 py-6"
            >
              <Link to="/kontakt">
                Küsi tasuta pakkumist
              </Link>
            </Button>
            {/* <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6"
            >
              <a href="tel:+37212345678">
                Helista kohe
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-16 last:mb-0 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:gap-12 items-center`}
            >
              <div className={`lg:w-1/2 mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>

              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                  <span className="font-medium">{service.title}</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  {service.fullDescription.split(/(\s+)/).map((word, idx) => {
                    const cleanWord = word.trim().toLowerCase().replace(/[.,!?]/g, '');
                    const punctuation = word.match(/[.,!?]/)?.[0] || '';
                    const wordWithoutPunct = word.replace(/[.,!?]/g, '').trim();
                    
                    if (['tasuta'].includes(cleanWord)) {
                      return <span key={idx}><span className="font-semibold text-green-600 bg-green-50 px-1 rounded">{wordWithoutPunct}</span>{punctuation} </span>;
                    }
                    if (['kvaliteetne', 'kvaliteet', 'kvaliteedile'].includes(cleanWord)) {
                      return <span key={idx}><span className="font-semibold text-blue-600 bg-blue-50 px-1 rounded">{wordWithoutPunct}</span>{punctuation} </span>;
                    }
                    if (['kogenud'].includes(cleanWord)) {
                      return <span key={idx}><span className="font-semibold text-purple-600 bg-purple-50 px-1 rounded">{wordWithoutPunct}</span>{punctuation} </span>;
                    }
                    if (['garantii'].includes(cleanWord)) {
                      return <span key={idx}><span className="font-semibold text-yellow-600 bg-yellow-50 px-1 rounded">{wordWithoutPunct}</span>{punctuation} </span>;
                    }
                    if (['kiire', 'kiirelt'].includes(cleanWord)) {
                      return <span key={idx}><span className="font-semibold text-orange-600 bg-orange-50 px-1 rounded">{wordWithoutPunct}</span>{punctuation} </span>;
                    }
                    return <span key={idx}>{word} </span>;
                  })}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${service.color.replace('from-', 'text-').replace(' to-', '')} flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="outline" className={`${service.borderColor} ${service.bgColor}`}>
                      {benefit}
                    </Badge>
                  ))}
                </div>

                {/* ABILITY: Множественные пути контакта с улучшенной кнопкой звонка */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button asChild className={`bg-gradient-to-r ${service.color} hover:opacity-90 shadow-lg hover:shadow-xl transition-all flex-1`}>
                    <Link to="/kontakt">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Küsi pakkumist
                    </Link>
                  </Button>
                  {/* PROMPTS: Улучшенная кнопка "Helista" с BJ Fogg элементами */}
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden group"
                  >
                    <a href="tel:+37212345678" className="relative z-10 flex items-center justify-center gap-2">
                      <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">Helista</span>
                      <Zap className="w-3 h-3 animate-pulse" />
                      {/* PROMPTS: Анимированный фон */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </a>
                  </Button>
                </div>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/referentsid">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Vaata sarnaseid projekte
                  </Link>
                </Button>

                {/* PROMPTS: Визуальный индикатор */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
