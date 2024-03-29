import Navbar from "@/components/common/navbar";
import EventInfo from './components/eventInfo'
import EventCalendar from './components/eventCalendar'
import Ad from './components/ad'
import Description from "./components/description"
import Social from './components/social'
import Reviews from './components/reviews'
import Footer from '@/components/common/footer'

const EventDetail = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="pt-28 mx-[9.3%]">
        <EventInfo/>
      </div>
      <div className="">
        <EventCalendar/>
      </div>
      <Ad/>
      <Description/>
      <Social/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default EventDetail;
