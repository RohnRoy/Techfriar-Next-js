import Header from '../components/Header';
import BookingDownloadSection from '../components/BookingDownloadSection'
import Banner from '../components/Banner'
import PopularCarsSection from '../components/PopularCarsSection'
import ExclusiveOfferSection from '../components/ExclusiveOfferSection'
import RentalInstructions from '../components/RentalInstructions'
import BranchLocations from '../components/BranchLocations'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <BookingDownloadSection />
      <Banner />
      <PopularCarsSection />
      <ExclusiveOfferSection />
      <RentalInstructions />
      <BranchLocations />
      <FaqSection />
      <Footer />
    </>
  );
}
