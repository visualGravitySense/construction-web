import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button"

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Показываем CTA после скролла вниз
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-2 min-w-[280px] border border-gray-100 animate-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Võta ühendust</h3>
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200">
              <a href="tel:+37212345678">
                <Phone className="w-5 h-5 mr-3" />
                <span>Helista kohe</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/kontakt">
                <MessageCircle className="w-5 h-5 mr-3" />
                <span>Saada sõnum</span>
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/kontakt">
                Küsi pakkumist
              </Link>
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Vastame 24 tunni jooksul
          </p>
        </div>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="icon"
        className="w-16 h-16 rounded-full shadow-lg hover:scale-110"
        aria-label="Kontakt"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingCTA;

