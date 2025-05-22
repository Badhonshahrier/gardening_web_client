import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
// import FeaturedGardeners from "../Components/FeaturedGardeners";
import InstrumentSection from "../Components/InstrumentSection";
import Faq from "../Components/Faq";

const Home = () => {
  const singleData = useLoaderData();

  return (
    <div>
      <Banner singleData={singleData}></Banner>
      {/* <FeaturedGardeners></FeaturedGardeners> */}
      <InstrumentSection></InstrumentSection>
      <Faq></Faq>
    </div>
  );
};

export default Home;
