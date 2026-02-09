import ContactForm from '../../components/ContactForm/ContactForm';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2, Award, TrendingUp, Clock, Star, Shield, Sparkles, Zap, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page min-h-screen bg-white">
      {/* Hero Section - BJ Fogg Improvements */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Võta meiega ühendust
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Oleme abiks kõigis ehitusalastes küsimustes. Pakume <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">tasuta konsultatsiooni</span> ja <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">kiiret vastust</span> 24 tunni jooksul.
            </p>

            {/* PROMPTS: Анимированный бейдж для мотивации */}
            <div className="mb-8 flex justify-center">
              <Badge className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 mr-2" />
                Tasuta konsultatsioon - Vastame 24h jooksul!
              </Badge>
            </div>

            {/* MOTIVATION: Социальное доказательство */}
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
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details - ABILITY: Упрощенные контактные данные */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Kontaktandmed
                  </Badge>
                  <Badge className="px-4 py-2 bg-amber-100 text-amber-700 border-amber-300 text-xs">
                    DEMO — Placeholder contacts
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Võta meiega ühendust
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Oleme alati valmis aitama teid <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">kõigis ehitusalastes küsimustes</span>. Vastame <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">24 tunni jooksul</span>.
                </p>
              </div>

              {/* ABILITY: Улучшенные контактные карточки */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all hover:scale-105 group">
                  <div className="bg-blue-600 rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Betoonväljak 1<br />
                      10115 Tallinn, Eesti
                    </p>
                  </div>
                </div>

                <a 
                  href="tel:+37212345678" 
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all hover:scale-105 group block"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-700 font-semibold text-lg">+372 1234 5678</p>
                    <p className="text-sm text-gray-500 mt-1">Kliki, et helistada</p>
                  </div>
                  <Zap className="w-5 h-5 text-green-600 animate-pulse" />
                </a>

                <a 
                  href="mailto:info@ecobeton.ee" 
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all hover:scale-105 group block"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700 font-semibold">info@ecobeton.ee</p>
                    <p className="text-sm text-gray-500 mt-1">Kliki, et saata email</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                  <div className="bg-gray-600 rounded-lg p-3">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Registreerimisandmed</h3>
                    <p className="text-gray-700">
                      Reg-nr: <span className="font-semibold">12345678</span><br />
                      KMKR: <span className="font-semibold">EE123456789</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* PROMPTS: Визуальные индикаторы преимуществ */}
              <div className="pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border-2 border-green-200 hover:shadow-md transition-all">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-xs text-gray-500">Vastus</div>
                      <div className="text-sm font-bold text-gray-900">24h jooksul</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border-2 border-blue-200 hover:shadow-md transition-all">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">Konsultatsioon</div>
                      <div className="text-sm font-bold text-gray-900">Tasuta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Improved Design */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 text-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-[url('/pattern-1.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-purple-600/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* PROMPTS: Анимированная иконка */}
          <div className="mb-6">
            <Phone className="w-16 h-16 mx-auto text-yellow-300 drop-shadow-lg animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Eelistad helistada?
          </h2>
          
          {/* MOTIVATION: Выделение контактной информации */}
          <div className="mb-10 space-y-4">
            <p className="text-xl text-blue-100 drop-shadow-md mb-6">
              Helista meile otse või saada email
            </p>
            
            {/* Контактные карточки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
              <a 
                href="tel:+37212345678"
                className="group flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/30 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="bg-green-500/30 rounded-full p-2 group-hover:bg-green-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-blue-200 mb-1">Telefon</div>
                  <div className="text-xl font-bold text-white">+372 1234 5678</div>
                </div>
                <Zap className="w-5 h-5 text-yellow-300 animate-pulse ml-auto" />
              </a>

              <a 
                href="mailto:info@ecobeton.ee"
                className="group flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/30 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="bg-purple-500/30 rounded-full p-2 group-hover:bg-purple-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-blue-200 mb-1">Email</div>
                  <div className="text-xl font-bold text-white">info@ecobeton.ee</div>
                </div>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ABILITY: Улучшенные кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 relative overflow-hidden group px-10 py-7"
            >
              <a href="tel:+37212345678" className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">Helista kohe</span>
                  <Zap className="w-5 h-5 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 text-base px-10 py-7 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
            >
              <a href="mailto:info@ecobeton.ee" className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Saada email</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* PROMPTS: Визуальные индикаторы */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-semibold">Vastame 24h jooksul</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-semibold">Tasuta konsultatsioon</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              <div className="bg-white/30 rounded-full p-1.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="font-semibold">Garantii kvaliteedile</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
