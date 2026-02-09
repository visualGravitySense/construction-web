import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Отслеживание скролла для изменения стиля header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при изменении роута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group gap-2 lg:gap-3">
            <img 
              src="/ecobeton-brand-1.svg" 
              alt="EcoBeton Grupp OÜ Logo" 
              className="hidden h-8 w-auto lg:h-10 xl:h-12 transition-transform group-hover:scale-105"
              aria-hidden="true"
            />
            <div className="flex flex-col">
            <span className="
              text-2xl lg:text-3xl font-bold
              bg-[linear-gradient(90deg,#020617_0%,#1e3a8a_50%,#020617_100%)]
              bg-clip-text text-transparent
              transition leading-tight
            ">
                ECOBETON
              </span>
              <span className="text-xs lg:text-sm text-gray-600 leading-tight">Grupp OÜ</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Avaleht
            </Link>
            
            <Link 
              to="/teenused" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/teenused' || location.pathname === '/transporditeenus'
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Teenused
            </Link>

            <Link 
              to="/referentsid" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/referentsid' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Projektid
            </Link>
            {/* <Link 
              to="/meist" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/meist' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Meist
            </Link> */}
            <Link 
              to="/kontakt" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/kontakt' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Kontakt
            </Link>

            {/* Мотивация: Быстрый контакт */}
            <a 
              href="tel:+37212345678" 
              className="flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+372 1234 5678</span>
            </a>

            {/* Способность: Улучшенная CTA кнопка */}
            <Button asChild size="sm">
              <Link to="/kontakt">
                <span>Küsi pakkumist</span>
                <CheckCircle className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Мотивация: Телефон на мобильных */}
            <a 
              href="tel:+37212345678" 
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
              aria-label="Helista"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-in slide-in-from-top-4">
            <div className="px-4 py-4 space-y-1">
              {/* Мотивация: Социальное доказательство в мобильном меню */}
              <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-100">
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">100+ edukat projekti</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">Vastame 24h jooksul</p>
              </div>

              <Link 
                to="/" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Avaleht
              </Link>

              <Link 
                to="/teenused" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/teenused' || location.pathname === '/transporditeenus'
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Teenused
              </Link>

              <Link 
                to="/referentsid" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/referentsid' 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projektid
              </Link>
              <Link 
                to="/meist" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/meist' 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Meist
              </Link>
              <Link 
                to="/kontakt" 
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/kontakt' 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>

              {/* Способность: Улучшенная CTA в мобильном меню */}
              <div className="pt-4 border-t space-y-2">
                <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/kontakt">
                    Küsi pakkumist
                  </Link>
                </Button>
                <Button asChild variant="default" className="w-full bg-green-600 hover:bg-green-700" onClick={() => setIsMenuOpen(false)}>
                  <a href="tel:+37212345678">
                    <Phone className="w-5 h-5 mr-2" />
                    Helista kohe
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
