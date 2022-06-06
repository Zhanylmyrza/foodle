import './index.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Partners from './components/Partners/Partners';
import Meals from './components/Meals/Meals';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing.js';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';


function App() {
  return (
   <>
      <Header />
      <Hero />
      <Partners />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
