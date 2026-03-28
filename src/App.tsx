// Removed unused React import
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import BeforeAfter from './components/sections/BeforeAfter';
import CTA from './components/sections/CTA';

import OrganicSeparator from './components/ui/OrganicSeparator';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <Layout>
      <Hero />
      
      {/* Organic Transition */}
      <OrganicSeparator className="-mt-12 md:-mt-20" />
      
      <Services />
      <BeforeAfter />
      <CTA />
      
      <FloatingWhatsApp />
    </Layout>
  );
}

export default App;
