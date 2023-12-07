import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Hero from './hero';
import HowItWorks from './how-it-works';
import PerfectMatch from './perfect-match';
import Services from './services';
import Testimonials from './testimonials';
import WhyHealHaven from './why-heal-haven';

function Landing() {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/home" />;
  }
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
