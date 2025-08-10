import MainLayout from './components/templates/MainLayout';
import HeroSection from './components/organisms/HeroSection';
import ServicesSection from './components/organisms/ServicesSection';
import SpecialistsSection from './components/organisms/SpecialistsSection';
import TestimonialsSection from './components/organisms/TestimonialsSection';
import ContactSection from './components/organisms/ContactSection';
import FadeInSection from './components/atoms/FadeInSection';
import SlideInSection from './components/atoms/SlideInSection';

function App() {
  return (
    <MainLayout>
      <FadeInSection delay={0.1}>
        <HeroSection />
      </FadeInSection>
      
      <SlideInSection direction="up" delay={0.3}>
        <ServicesSection />
      </SlideInSection>
      
      <SlideInSection direction="left" delay={0.5}>
        <SpecialistsSection />
      </SlideInSection>
      
      <SlideInSection direction="right" delay={0.7}>
        <TestimonialsSection />
      </SlideInSection>
      
      <FadeInSection delay={0.9}>
        <ContactSection />
      </FadeInSection>
    </MainLayout>
  );
}

export default App;