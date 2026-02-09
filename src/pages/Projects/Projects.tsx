import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ArrowRight, Sparkles, Award, TrendingUp, Phone, MessageSquare, Zap, Building2, Factory, Warehouse, Zap as ZapIcon, Home, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: 'Tivoli kortermajad',
    shortTitle: 'Tivoli',
    location: 'Tallinn',
    year: '2015-2016',
    description: '4800 m³ betoonitöid, 7300 m² montaažitöid, 55 rõdu paigaldus',
    gradient: 'from-blue-500 to-blue-700',
    image: 'https://images.unsplash.com/photo-1723369962563-5e873df9b93b?w=800&q=80',
    icon: <Building2 className="w-8 h-8" />,
    stats: { 
      concrete: '4800 m³ betoonitöid', 
      assembly: '7300 m² montaažitöid', 
      balconies: '55 rõdu paigaldus' 
    },
    client: 'Nordecon AS'
  },
  {
    id: 2,
    title: 'WoHo äri-ja eluhoone',
    shortTitle: 'WoHo',
    location: 'Tallinn',
    year: '2017-2018',
    description: '7900 m³ betoonitöid',
    gradient: 'from-indigo-500 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1715695938675-87e7c6c498e5?w=800&q=80',
    icon: <Building2 className="w-8 h-8" />,
    stats: { 
      concrete: '7900 m³ betoonitöid'
    },
    client: 'Nordecon Betoon OÜ'
  },
  {
    id: 3,
    title: 'Ektorpsvägen, Nacka kortermaja',
    shortTitle: 'Ektorpsvägen',
    location: 'Stockholm',
    year: '2017-2018',
    description: '2358 ühiku betoonelemendi paigaldust, 10900 m² montaažitöid',
    gradient: 'from-purple-500 to-purple-700',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    icon: <Building2 className="w-8 h-8" />,
    stats: { 
      elements: '2358 ühiku betoonelemendi paigaldust', 
      assembly: '10900 m² montaažitöid' 
    },
    client: 'Lasbet Tootmine OÜ / Gärahovs Bygg AB'
  },
  {
    id: 4,
    title: 'Kohtla Järve reoveepuhasti',
    shortTitle: 'Kohtla Järve',
    location: 'Kohtla Järve',
    year: '2016',
    description: '2550 m³ betoonitöid',
    gradient: 'from-green-500 to-green-700',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    icon: <Factory className="w-8 h-8" />,
    stats: { 
      concrete: '2550 m³ betoonitöid'
    },
    client: 'Nordecon AS'
  },
  {
    id: 5,
    title: 'Lookivi Park logistikakeskus',
    shortTitle: 'Lookivi Park',
    location: 'Rae vald',
    year: '2016-2017',
    description: '280 m³ betoonitöid, 1374 m² montaažitöid',
    gradient: 'from-orange-500 to-orange-700',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    icon: <Warehouse className="w-8 h-8" />,
    stats: { 
      concrete: '280 m³ betoonitöid', 
      assembly: '1374 m² montaažitöid' 
    },
    client: 'Alandia KV OÜ'
  },
  {
    id: 6,
    title: 'Kehra elektrijaam',
    shortTitle: 'Kehra',
    location: 'Kehra',
    year: '2017',
    description: '2200 m³ betoonitöid, 850 m² montaažitöid',
    gradient: 'from-yellow-500 to-yellow-700',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    icon: <ZapIcon className="w-8 h-8" />,
    stats: { 
      concrete: '2200 m³ betoonitöid', 
      assembly: '850 m² montaažitöid' 
    },
    client: 'Nordecon Betoon OÜ'
  },
  {
    id: 7,
    title: 'Karulaugu spordikeskus',
    shortTitle: 'Karulaugu',
    location: 'Viimsi',
    year: '2017-2018',
    description: '30 m³ betoonlagi, 248 ühikut betoonelementide paigaldust, 2900 m² montaažitöid',
    gradient: 'from-red-500 to-red-700',
    image: 'https://images.unsplash.com/photo-1567673624066-7e1f2e0a8757?w=800&q=80',
    icon: <Home className="w-8 h-8" />,
    stats: { 
      ceiling: '30 m³ betoonlagi', 
      elements: '248 ühikut betoonelementide paigaldust', 
      assembly: '2900 m² montaažitöid' 
    },
    client: 'Mapri Ehitus OÜ'
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
    <div className="projects-page min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Meie tööd
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meie projektid
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Seitse kõige olulisemat <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">verstaposti</span> - projektid, mida peame <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">väga olulisteks</span>
            </p>

            {/* PROMPTS: Анимированный бейдж для мотивации */}
            <div className="mb-8 flex justify-center">
              <Badge className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 mr-2" />
                Vaata meie edukaid projekte - 100+ projektid edukalt!
              </Badge>
            </div>

            {/* MOTIVATION: Расширенное социальное доказательство */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <Award className="w-6 h-6 text-yellow-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Verstaposti</div>
                  <div className="text-sm font-bold text-gray-900">7 projektid</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Kokku projekte</div>
                  <div className="text-sm font-bold text-gray-900">100+ edukalt</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Asukohad</div>
                  <div className="text-sm font-bold text-gray-900">Eesti & Rootsi</div>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PROMPTS: Заголовок секции с подсказкой */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Kõik meie projektid
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vali projekt, mis sind huvitab
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kõik projektid on <span className="font-semibold text-green-600">edukalt lõpetatud</span> ja <span className="font-semibold text-blue-600">kõrge kvaliteediga</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isHovered = hoveredProject === project.id;
              const delay = index * 100;

              return (
                <Card
                  key={project.id}
                  className={`overflow-hidden transition-all duration-300 group cursor-pointer hover:shadow-xl ${
                    isHovered 
                      ? 'border-blue-600 shadow-2xl scale-105' 
                      : 'hover:border-blue-400'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${delay}ms`,
                    animationFillMode: 'both'
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Изображение проекта */}
                  <div className="h-56 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Градиентный overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                    
                    {/* Текст на изображении */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center px-4">
                      <div>
                        <div className="text-3xl lg:text-4xl font-bold mb-2 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                          {project.shortTitle}
                        </div>
                        <div className="text-sm opacity-75 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 drop-shadow-md">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </div>
                      </div>
                    </div>

                    {/* Иконка в углу */}
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20 z-10`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>

                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <CardHeader>
                    {/* Метаданные проекта */}
                    <div className="flex gap-4 mb-3 text-sm text-gray-500 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    {/* MOTIVATION: Выделение ключевых слов в описании */}
                    <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
                      {project.description.split(' ').map((word, idx) => {
                        const cleanWord = word.toLowerCase().replace(/[.,]/g, '');
                        if (cleanWord.includes('m³') || cleanWord.includes('m²')) {
                          return <span key={idx} className="font-semibold text-blue-600 bg-blue-50 px-1 rounded">{word} </span>;
                        }
                        if (cleanWord.includes('betoon') || cleanWord.includes('montaaž')) {
                          return <span key={idx} className="font-semibold text-green-600 bg-green-50 px-1 rounded">{word} </span>;
                        }
                        return <span key={idx}>{word} </span>;
                      })}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* MOTIVATION: Статистика проекта при наведении с улучшенным дизайном */}
                    {isHovered && project.stats && (
                      <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 animate-in fade-in slide-in-from-top-2 shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-gray-900">Projekti andmed:</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2 bg-white/60 px-2 py-1.5 rounded">
                              <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        {project.client && (
                          <div className="mt-3 pt-3 border-t border-blue-200">
                            <div className="flex items-center gap-2 mb-1">
                              <Award className="w-3 h-3 text-yellow-600" />
                              <div className="text-xs text-gray-500 font-semibold">Klient:</div>
                            </div>
                            <div className="text-xs font-bold text-gray-900 bg-white/60 px-2 py-1 rounded">{project.client}</div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* ABILITY: Простое действие - быстрый контакт */}
                    {!isHovered && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>Hover, et näha rohkem</span>
                      </div>
                    )}
                  </CardContent>

                  {/* PROMPTS: Визуальный индикатор и CTA */}
                  <div className="px-6 pb-4">
                    <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3`}></div>
                    {/* ABILITY: Простая кнопка контакта */}
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs text-blue-600 hover:bg-blue-50 border border-blue-200 hover:border-blue-400 transition-all"
                    >
                      <Link to="/kontakt">
                        <MessageSquare className="w-3 h-3 mr-2" />
                        Küsi sarnast projekti
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - BJ Fogg Improvements */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/why-choose-us.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-purple-600/90"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* PROMPTS: Анимированная иконка */}
          <div className="mb-6">
            <Award className="w-16 h-16 mx-auto text-yellow-300 drop-shadow-lg animate-pulse" />
          </div>

          {/* MOTIVATION: Социальное доказательство */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge className="px-4 py-2 bg-yellow-400/20 text-yellow-200 border-yellow-300/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 fill-yellow-300" />
              2x Aasta Betoonehitis
            </Badge>
            <Badge className="px-4 py-2 bg-green-400/20 text-green-200 border-green-300/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              100+ projektid
            </Badge>
            <Badge className="px-4 py-2 bg-blue-400/20 text-blue-200 border-blue-300/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 fill-yellow-300" />
              4.9/5 hinnang
            </Badge>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Valmis alustama oma projekti?
          </h2>
          
          {/* MOTIVATION: Выделение ключевых слов */}
          <p className="text-lg mb-8 text-blue-100 drop-shadow-md">
            Võta meiega ühendust ja saame koos leida <span className="font-bold text-white bg-white/20 px-2 py-1 rounded">parima lahenduse</span> teie projektile. 
            Pakume <span className="font-bold text-green-300 bg-green-500/20 px-2 py-1 rounded">tasuta konsultatsiooni</span> ja <span className="font-bold text-yellow-300 bg-yellow-500/20 px-2 py-1 rounded">kiiret vastust</span> 24 tunni jooksul.
          </p>

          {/* PROMPTS: Анимированный бейдж */}
          <div className="mb-8 flex justify-center">
            <Badge className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 mr-2" />
              Tasuta konsultatsioon - Vastame 24h jooksul!
            </Badge>
          </div>

          {/* ABILITY: Множественные простые пути контакта */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-base px-8 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 group/btn"
            >
              <Link to="/kontakt" className="relative z-10">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 rounded-lg p-1.5 group-hover/btn:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-bold">Küsi tasuta pakkumist</span>
                  <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                </div>
              </Link>
            </Button>
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </Button>
          </div>

          {/* PROMPTS: Визуальные индикаторы преимуществ */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-semibold">Vastame 24h jooksul</span>
            </div>
            <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-semibold">Tasuta konsultatsioon</span>
            </div>
            <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-semibold">Garantii kvaliteedile</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
