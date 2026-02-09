import { Link } from 'react-router-dom';
import { Award, ArrowRight, Phone, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: ShieldCheck, text: 'Tasuta konsultatsioon' },
  { icon: Clock, text: 'Vastame 24h jooksul' },
  { icon: CheckCircle, text: 'Garantii kvaliteedile' }
];

const ReadyCTA = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#1a1a1a] overflow-hidden">
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
            }}
          />

          <div className="relative z-10 p-8 lg:p-12 text-center">
            {/* Company logo — top right, subtle */}
            <div className="absolute top-6 right-6 text-gray-500/60 text-xs font-medium tracking-widest">
              ECOBETON
            </div>

            {/* Top badge — 2x Aasta Betoonehitis auhind */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-400/60 text-green-400 bg-[#1a1a1a]/80 mb-8">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">
                <span className="text-green-300 font-semibold">2x</span> Aasta Betoonehitis auhind
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              Valmis alustama oma projekti?
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Võta meiega ühendust ja saame tasuta konsultatsiooni ajal koos leida parima lahenduse sinu projektile
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-green-500 hover:bg-green-400 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-green-500/25"
              >
                <Link to="/teenused" className="flex items-center gap-2">
                  <span>Vaata kõiki teenuseid</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-500 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl px-8 py-6"
              >
                <a href="tel:+37212345678" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Helista kohe</span>
                </a>
              </Button>
            </div>

            {/* Bottom benefits */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {benefits.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <IconComp className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyCTA;
