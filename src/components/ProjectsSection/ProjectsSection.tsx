import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BarChart3, ArrowRight, Cog, HardHat, Globe, X, ZoomIn, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button"

const topProjects = [
  {
    id: 1,
    title: 'Tivoli kortermajad',
    shortTitle: 'Tivoli',
    location: 'Tallinn',
    year: '2015-2016',
    description: '4800 m³ betoonitöid, 7300 m² montaažitöid, 55 rõdu paigaldus.',
    image: 'https://images.unsplash.com/photo-1723369962563-5e873df9b93b?w=800&q=80',
    metricValue: '4800 m³',
    metricLabel: 'BETOONITÖID, 55 RÕDU'
  },
  {
    id: 2,
    title: 'WoHo äri-ja eluhoone',
    shortTitle: 'WoHo',
    location: 'Tallinn',
    year: '2017-2018',
    description: '7900 m³ betoonitöid. Kõrghoone betoonikonstruktsioonid.',
    image: 'https://images.unsplash.com/photo-1715695938675-87e7c6c498e5?w=800&q=80',
    metricValue: '7900 m³',
    metricLabel: 'BETOONITÖID'
  },
  {
    id: 3,
    title: 'Ektorpsvägen, Nacka kortermaja',
    shortTitle: 'Ektorpsvägen',
    location: 'Stockholm',
    year: '2017-2018',
    description: '2358 ühiku betoonelemendi paigaldust, 10900 m² montaažitöid.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    metricValue: '10900 m²',
    metricLabel: 'MONTAAŽITÖID'
  }
];

const statsBottom = [
  { icon: Cog, label: '12+ AASTAT KOGEMUST' },
  { icon: HardHat, label: '100+ EDUKAT PROJEKTI' },
  { icon: Globe, label: 'BALTI JA SKANDINAAVIA' }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof topProjects[0] | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#1a1d24] relative overflow-hidden">
      {/* Vertical bar chart decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-px h-32 bg-white/5"></div>
        <div className="absolute left-8 top-1/3 w-px h-24 bg-white/5"></div>
        <div className="absolute left-16 top-2/3 w-px h-40 bg-white/5"></div>
        <div className="absolute right-0 top-1/3 w-px h-28 bg-white/5"></div>
        <div className="absolute right-12 top-1/2 w-px h-36 bg-white/5"></div>
        <div className="absolute right-24 top-2/5 w-px h-20 bg-white/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — ECOBETON GRUPP + Expertise & Services */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-6 h-6 text-green-500" />
            <span className="text-white font-semibold text-lg tracking-wide">ECOBETON GRUPP</span>
          </div>
          <p className="text-gray-400 text-sm">Expertise & Services</p>
        </div>

        {/* Three project cards — neon green border, grayscale image, luminous overlay */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {topProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden border-2 border-green-500/80 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image — grayscale with luminous green lines overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-[60%] transition-all duration-500 group-hover:scale-105"
                />
                {/* Luminous green line overlays */}
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-green-400/70" style={{ boxShadow: '0 0 12px rgba(74,222,128,0.8)' }}></div>
                  <div className="absolute top-0 right-1/3 w-0.5 h-full bg-green-400/70" style={{ boxShadow: '0 0 12px rgba(74,222,128,0.8)' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-full h-0.5 bg-green-400/70" style={{ boxShadow: '0 0 12px rgba(74,222,128,0.8)' }}></div>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(project); setIsImageZoomed(true); }}
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content — dark grey, title, description, metric */}
              <div className="bg-[#252830] px-6 py-5">
                <h3 className="text-lg font-bold text-white uppercase mb-3 leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 min-w-0">
                    {project.description}
                  </p>
                  <div className="flex-shrink-0 sm:w-px sm:h-auto w-full h-px bg-green-500/60"></div>
                  <div className="flex-shrink-0 sm:text-right min-w-0">
                    <div className="text-2xl font-bold text-white">{project.metricValue}</div>
                    <div className="text-white/70 text-xs uppercase tracking-wide mt-1">{project.metricLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row — gear, hard hat, globe */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 mb-12">
          {statsBottom.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${400 + i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-white text-sm uppercase tracking-wider font-medium">{stat.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-500 text-white border-0">
            <Link to="/referentsid">
              <span>Vaata kõiki projekte</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            Või <Link to="/kontakt" className="text-green-400 hover:text-green-300 font-medium underline">võta meiega ühendust</Link> oma projekti kohta
          </p>
        </div>
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => {
            setSelectedProject(null);
            setIsImageZoomed(false);
          }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                  <span>•</span>
                  <span className="font-semibold text-green-600">{selectedProject.metricValue}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setIsImageZoomed(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Sulge"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Контент модального окна */}
            <div className="p-6">
              {/* Project image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className={`w-full h-auto object-cover transition-transform duration-300 ${
                    isImageZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsImageZoomed(!isImageZoomed)}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
                  <ZoomIn className="w-4 h-4" />
                  <span>{isImageZoomed ? 'Vähenda' : 'Suurenda'}</span>
                </div>
              </div>

              {/* Описание проекта */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Projekti kirjeldus</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Project metric */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Projekti statistika</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-green-600">{selectedProject.metricValue}</span>
                  <span className="text-gray-600 text-sm uppercase tracking-wide">{selectedProject.metricLabel}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                <Button asChild className="flex-1">
                  <Link to={`/referentsid#${selectedProject.id}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Vaata täpsemat infot
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/kontakt">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Küsi pakkumist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
