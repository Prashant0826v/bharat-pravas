import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import QuickSearch from '@/components/QuickSearch/QuickSearch';
import DestinationExplorer from '@/components/DestinationExplorer/DestinationExplorer';
import UpcomingDepartures from '@/components/UpcomingDepartures/UpcomingDepartures';
import WhyBharatPravas from '@/components/WhyBharatPravas/WhyBharatPravas';
import Testimonials from '@/components/Testimonials/Testimonials';
import FounderStory from '@/components/FounderStory/FounderStory';
import SocialMoments from '@/components/SocialMoments/SocialMoments';
import CustomPlanner from '@/components/CustomPlanner/CustomPlanner';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickSearch />
        <DestinationExplorer />
        <UpcomingDepartures />
        <WhyBharatPravas />
        <Testimonials />
        <FounderStory />
        <SocialMoments />
        <CustomPlanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
