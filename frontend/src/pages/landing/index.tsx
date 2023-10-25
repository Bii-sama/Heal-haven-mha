import Hero from './hero';
import HowItWorks from './how-it-works';
import PerfectMatch from './perfect-match';
import Services from './services';
import Testimonials from './testimonials';
import WhyHealHaven from './why-heal-haven';

function Landing() {
  return (
    <>
      <Hero />
      <Services />
      <WhyHealHaven />
      <HowItWorks />
      <Testimonials />
      <PerfectMatch />
    </>
  );
}

export default Landing;
