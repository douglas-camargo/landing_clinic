import MainLayout from './components/templates/MainLayout';
import HeroSection from './components/organisms/HeroSection';
import ServicesSection from './components/organisms/ServicesSection';
import SpecialistsSection from './components/organisms/SpecialistsSection';
import TestimonialsSection from './components/organisms/TestimonialsSection';
import ContactSection from './components/organisms/ContactSection';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <SpecialistsSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;