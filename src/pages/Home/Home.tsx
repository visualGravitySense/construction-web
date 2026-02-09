import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import ReadyCTA from '../../components/ReadyCTA/ReadyCTA';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import Certificates from '../../components/Certificates/Certificates';
import ContactSection from '../../components/ContactSection/ContactSection';
import QuickForm from '../../components/QuickForm/QuickForm';
import FloatingCTA from '../../components/FloatingCTA/FloatingCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <ReadyCTA />
      <ProjectsSection />
      <Testimonials />
      <Certificates />
      <ContactSection />
      <QuickForm />
      <FloatingCTA />
    </div>
  );
};

export default Home;
