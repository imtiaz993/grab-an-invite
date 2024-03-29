import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import HeroSection from "./components/heroSection";
import CategoriesList from "./components/categoriesList";
import PopularEvents from "./components/popularEvents";
import BlogsList from "./components/blogsList";
import RecommendedEvents from "./components/recommendedEvents";
import UpcomingEvents from "./components/upcomingEvents";
import CTA from "./components/cta";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="mt-16 pb-36 mx-[9.3%] flex flex-col gap-y-36">
        <CategoriesList />
        <PopularEvents />
        <RecommendedEvents />
      </div>
      <CTA />
      <div className="mt-36 pb-36 mx-[9.3%] flex flex-col gap-y-36">
        <UpcomingEvents />
        <BlogsList />
      </div>
      <Footer/>
    </div>
  );
}
