import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Award, Facebook, Linkedin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1115] text-gray-50">
      {/* Top CTA block — dark gray, textured */}
      <div
        className="relative py-12 lg:py-14"
        style={{
          backgroundColor: '#1a1d24',
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Valmis alustama oma projekti?
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Võta meiega ühendust ja saame tasuta konsultatsiooni
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Vastame 24h jooksul</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>2x Aasta Betoonehitis</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>100+ edukat projekti</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all"
              >
                Küsi pakkumist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+37212345678"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Helista
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Green separator */}
      <div className="h-0.5 bg-green-500" style={{ boxShadow: '0 0 12px rgba(34,197,94,0.5)' }} />

      {/* Main footer — dark charcoal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">EcoBeton</span>
              <span className="text-gray-400 ml-1">Grupp OÜ</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Üldehitus, ehitusjuhtimine ning elamute ja muude ehitiste projekteerimine.
              Kvaliteetne teenus Eestis ja Baltikumis.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com/ecobeton"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/ecobeton"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/50 rounded-lg px-4 py-3">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="text-white font-semibold text-sm">2x Aasta Betoonehitis</div>
                <div className="text-gray-400 text-xs">Tunnustatud kvaliteet</div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Kiired lingid</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Avaleht' },
                { to: '/teenused', label: 'Teenused' },
                { to: '/referentsid', label: 'Projektid' },
                { to: '/kontakt', label: 'Kontakt' }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Kontakt</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Betoonväljak 1</p>
                  <p className="text-gray-400">10115 Tallinn, Eesti</p>
                  <a
                    href="https://maps.google.com/?q=Betoonv%C3%A4ljak+1,+10115+Tallinn,+Estonia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 inline-flex items-center gap-1 mt-1 transition-colors"
                  >
                    Vaata kaardil
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+37212345678" className="text-gray-400 hover:text-white transition-colors">
                  +372 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:info@ecobeton.ee" className="text-gray-400 hover:text-white transition-colors">
                  info@ecobeton.ee
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-gray-800">
                <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Tööaeg E-P: 8:00 - 17:00</p>
                  <p className="text-gray-500 text-xs mt-1">Vastame 24h jooksul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Teave</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">Registrikood</p>
                <p className="text-gray-400 font-mono">12345678</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">KMKR</p>
                <p className="text-gray-400 font-mono">EE123456789</p>
              </div>
              <div className="pt-2 border-t border-gray-800 space-y-2">
                <Link to="/privaatsuspoliitika" className="block text-gray-400 hover:text-green-500 transition-colors">
                  Privaatsuspoliitika
                </Link>
                <Link to="/kasutustingimused" className="block text-gray-400 hover:text-green-500 transition-colors">
                  Kasutustingimused
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8">
          <div className="h-px bg-green-500/60 mb-8" style={{ boxShadow: '0 0 10px rgba(34,197,94,0.3)' }} />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} EcoBeton Grupp OÜ. Kõik õigused kaitstud.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>100% kvaliteet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Usaldusväärne</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>12+ aastat kogemust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
