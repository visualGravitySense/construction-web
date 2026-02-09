import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Zap, Award, Clock, Phone, Sparkles, TrendingUp, Shield, Star, Users, FileText, Calculator, Info, AlertCircle, X, Eye, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showSystem2Info, setShowSystem2Info] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Управление воспроизведением видео при переключении слайдов
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play().catch(() => {
            // Игнорируем ошибки автовоспроизведения
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const slides = [
    {
      welcomeText: "TERE TULEMAST ECOBETONI",
      heading: "EHITAME PAREMA TULEVIKU",
      description: "Anname endast iga päev maksimumi, püüeldes täiusliku tulemuse ja kõrge kvaliteedi poole, et ületada ka kõige nõudlikuma kliendi ootused.",
      video: "/motion-4.mp4"
    },
    {
      welcomeText: "TERE TULEMAST ECOBETONI",
      heading: "EHITAME PAREMA TULEVIKU",
      description: "Anname endast iga päev maksimumi, püüeldes täiusliku tulemuse ja kõrge kvaliteedi poole, et ületada ka kõige nõudlikuma kliendi ootused.",
      video: "/motion-2.mp4"
    },
    {
      welcomeText: "TERE TULEMAST ECOBETONI",
      heading: "EHITAME PAREMA TULEVIKU",
      description: "Anname endast iga päev maksimumi, püüeldes täiusliku tulemuse ja kõrge kvaliteedi poole, et ületada ka kõige nõudlikuma kliendi ootused.",
      video: "/motion-3.mp4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Full-screen video background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-label={`Video slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* ============================================ */}
            {/* BJ FOGG BEHAVIOR MODEL - STRUCTURED APPROACH */}
            {/* ============================================ */}
            
            {/* PROMPTS (Подсказки) - Заметные визуальные триггеры */}
            {/* <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-lg animate-pulse-subtle">
                <Zap className="w-3 h-3 mr-1.5 animate-bounce-subtle" />
                Tasuta konsultatsioon
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <Clock className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="font-medium">Vastame 24h jooksul</span>
              </div>
            </div> */}

            <div className="text-sm lg:text-base text-white/90 uppercase tracking-wider mb-4 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
              {slides[currentSlide].welcomeText}
            </div>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight uppercase [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
              {slides[currentSlide].heading}
            </h1>
            
            <p className="text-base lg:text-lg text-white/95 mb-6 leading-relaxed max-w-xl mx-auto [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              {slides[currentSlide].description}
            </p>

            {/* MOTIVATION (Мотивация) - Визуальные акценты и социальное доказательство */}
            <div className="mb-6 space-y-4">
              {/* Социальное доказательство - Мотивация */}
              <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 group">
                  <div className="p-2 bg-green-500/30 rounded-full group-hover:bg-green-500/40 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-white block [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">12+ aastat</span>
                    <span className="text-xs text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">kogemust</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-2 bg-orange-500/30 rounded-full group-hover:bg-orange-500/40 transition-colors">
                    <Award className="w-5 h-5 text-orange-300" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-white block [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">100+</span>
                    <span className="text-xs text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">edukat projekti</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-2 bg-blue-500/30 rounded-full group-hover:bg-blue-500/40 transition-colors">
                    <Award className="w-5 h-5 text-blue-300" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-white block [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">2x</span>
                    <span className="text-xs text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">Aasta Betoonehitis</span>
                  </div>
                </div>
              </div>

              {/* Выгоды - Мотивация */}
              {/* <div className="p-4 bg-white/70 backdrop-blur-sm rounded-lg border-l-4 border-orange-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Miks valida meid?</p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <Shield className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>Garanteeritud kvaliteet ja tähtaegade täitmine</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-orange-500 flex-shrink-0" />
                        <span>Tasuta esialgne konsultatsioon ja hinnapakkumine</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                        <span>4.9/5 kliendi hinnang - ületame ootused</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>

            {/* ABILITY (Способность) - Упрощение действий и снижение барьеров */}
            <div className="mb-6">
              {/* Упрощенные CTA с четкими инструкциями */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
                {/* Primary CTA - Минимальные шаги, максимальная ясность */}
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group relative overflow-hidden flex-1 sm:flex-none"
                >
                  <Link to="/kontakt" className="flex items-center justify-center relative z-10">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    <span>Küsi tasuta pakkumist</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {/* Secondary CTA - Альтернативный простой путь */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base lg:text-lg px-8 py-6 bg-blue-900 hover:bg-blue-950 text-white border-blue-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group flex-1 sm:flex-none"
                >
                  <Link to="/referentsid" className="flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span>Vaata projekte</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              {/* Визуальные подсказки для упрощения понимания */}
              {/* <div className="flex items-center justify-center gap-6 text-xs text-gray-500 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium">Kiire vastus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-blue-600" />
                  <span className="font-medium">Turvaline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="font-medium">Tasuta</span>
                </div>
              </div> */}

              {/* Информация о простоте процесса - Ability */}
              {/* <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                <p className="text-xs text-gray-700 text-center">
                  <strong className="text-blue-900">Lihtne protsess:</strong> Vorm täitmine võtab vaid 2 minutit • 
                  <span className="text-blue-700"> Ei ole kohustust</span> • 
                  <span className="text-green-700"> Privaatsus garanteeritud</span>
                </p>
              </div> */}
            </div>

            {/* PROMPTS (Подсказки) - Правильное время и множественные точки входа */}
            <div className="mb-6 space-y-4">
              {/* Контекстная подсказка - правильное время */}
              <div className="p-3 bg-orange-500/30 backdrop-blur-sm rounded-lg border border-orange-400/50">
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-200" />
                    <span className="text-sm font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">Kiire vastus garanteeritud</span>
                  </div>
                  <Button 
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-sm px-4 py-2 text-white hover:text-orange-200 hover:bg-white/10 rounded-md transition-all group"
                  >
                    <a href="tel:+37212345678" className="flex items-center gap-1.5 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">+372 1234 5678</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Визуальная обратная связь - Prompts */}
              {/* <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-green-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Vorm: 2 minutit</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-700">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Privaatsus garanteeritud</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-orange-700">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Vastame 24h jooksul</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* SPECTRUM OF THINKING INTERVENTIONS */}
            
            {/* 1. HABITS - Знакомые паттерны и стандартные элементы */}
            {/* <div className="mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">Tunnustatud kvaliteet</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>100+ klienti</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>100% rahulolu</span>
                </div>
              </div>
            </div> */}

            {/* 2. INTUITIVE RESPONSES - Знакомые визуальные метафоры доверия */}
            {/* <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-green-700" />
                  <span className="text-xs font-semibold text-green-900">Garantii</span>
                </div>
                <p className="text-xs text-green-700">Kvaliteet garanteeritud</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-semibold text-blue-900">Dokumenteeritud</span>
                </div>
                <p className="text-xs text-blue-700">Kõik protsessid selged</p>
              </div>
            </div> */}

            {/* 3. ACTIVE MINDSET - Эмоциональная идентификация с брендом */}
            {/* <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm font-medium text-gray-900 mb-2">Oled valmis oma projekti alustama?</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Meie kliendid valivad meid, sest me ühendame <span className="font-semibold text-orange-600">kogemuse, innovatsiooni ja pühendumuse</span> iga projekti edukaks viimiseks.
              </p>
            </div> */}

            {/* 4. HEURISTICS - Быстрые правила для принятия решений */}
            {/* <div className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <Calculator className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Kiire otsuse reegel:</p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-gray-900">Tasuta</strong> konsultatsioon - ei ole riski</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-gray-900">24h</strong> vastus - kiire algus</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-gray-900">12+ aastat</strong> kogemust - usaldusväärne</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* SYSTEM 2: Deliberate and Slow - Детальная информация для обдуманных решений */}
            {/* <div className="mb-6">
              <button
                onClick={() => setShowSystem2Info(!showSystem2Info)}
                className="w-full flex items-center justify-between gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors group"
                aria-expanded={showSystem2Info}
              >
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Vajad rohkem infot? (System 2 - детальный анализ)
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${showSystem2Info ? 'rotate-90' : ''}`} />
              </button>
              
              {showSystem2Info && (
                <div className="mt-3 p-5 bg-white rounded-lg border-2 border-orange-200 shadow-lg animate-fade-in">
                  <div className="space-y-4 text-sm text-gray-700"> */}
                    {/* Структурированная информация для System 2 */}
                    {/* <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                        <h3 className="font-bold text-gray-900 text-base">Meie protsess (5 этапов):</h3>
                      </div>
                      <ol className="space-y-3 ml-2">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">1</div>
                          <div>
                            <p className="font-semibold text-gray-900">Esialgne konsultatsioon</p>
                            <p className="text-xs text-gray-600">Tasuta, 30 minutit • Analüüsime sinu vajadusi</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">2</div>
                          <div>
                            <p className="font-semibold text-gray-900">Detailne analüüs ja hinnapakkumine</p>
                            <p className="text-xs text-gray-600">24 tunni jooksul • Selge eelarve ja tähtaeg</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">3</div>
                          <div>
                            <p className="font-semibold text-gray-900">Projekti planeerimine</p>
                            <p className="text-xs text-gray-600">Koos sinuga • Arvestame kõiki detaile</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">4</div>
                          <div>
                            <p className="font-semibold text-gray-900">Realiseerimine</p>
                            <p className="text-xs text-gray-600">Kvaliteedi standardite järgi • Pidev kommunikatsioon</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">5</div>
                          <div>
                            <p className="font-semibold text-gray-900">Kontroll ja üleandmine</p>
                            <p className="text-xs text-gray-600">Lõplik kontroll • Garantii kõigile töödele</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="pt-4 border-t-2 border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-gray-900 text-base">Mida saad:</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">Kvaliteetne töö</p>
                            <p className="text-xs text-gray-600">Vastavalt standarditele</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 bg-blue-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">Selged tähtaegad</p>
                            <p className="text-xs text-gray-600">Ja eelarve</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 bg-orange-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">Pidev kommunikatsioon</p>
                            <p className="text-xs text-gray-600">Projekti vältel</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 bg-purple-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">Garantii</p>
                            <p className="text-xs text-gray-600">Kõigile töödele</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    
                    {/* Error Prevention - Предотвращение ошибок */}
                    {/* <div className="pt-4 border-t-2 border-gray-200">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 text-xs mb-1">Oluline teave:</p>
                          <ul className="text-xs text-gray-700 space-y-1">
                            <li>• Konsultatsioon on täiesti tasuta ja kohustust ei teki</li>
                            <li>• Saad alati tagasi tulla ja muuta otsust</li>
                            <li>• Kõik andmed on kaitstud ja privaatsed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Slider Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-white/20 transition-colors rounded-full hover:scale-110 transition-transform"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-orange-500 hover:bg-orange-600 text-white transition-colors rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-transform"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex gap-2 ml-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-orange-500 w-8 h-2' 
                        : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* Floating stat overlay */}
      <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 animate-fade-in-up z-20 hidden lg:block">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-orange-400" />
          <div className="text-3xl font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">100+</div>
        </div>
        <div className="text-sm text-white/90 font-medium [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">Edukat projekti</div>
      </div>
    </section>
  );
};

export default Hero;
