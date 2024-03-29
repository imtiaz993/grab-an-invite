import React from "react";
import HeroSection from "./components/heroSection";
import PersonalDetails from "./components/personalDetails"
import ContactInfo from "./components/contactInfo"
import Hobbies from "./components/hobbies"
import Industry from "./components/industry"
import Reviews from "./components/reviews"

const Profile = () => {
  return (
    <div className="mx-8 my-20 text-dark">
      <HeroSection />
      <PersonalDetails/>
      <ContactInfo/>
      <Hobbies/>
      <Industry/>
      <Reviews/>
    </div>
  );
};

export default Profile;
