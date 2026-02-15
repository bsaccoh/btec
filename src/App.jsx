import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import CaseStudies from './components/CaseStudies'
import TelecomPipelineDiagram from './components/PipelineDiagram'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Careers from './components/Careers'
import About from './components/About'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import WhatsAppWidget from './components/WhatsAppWidget'
import CookieConsent from './components/CookieConsent'
import AnimatedSection from './components/AnimatedSection'
import './index.css'

function App() {
  return (
    <div className="app">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AnimatedSection>
        <ClientLogos />
      </AnimatedSection>
      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
      <AnimatedSection>
        <TelecomPipelineDiagram />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <AnimatedSection>
        <Blog />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <Careers />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <Newsletter />
      <CTA />
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  )
}

export default App
