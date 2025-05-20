import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";

const Home = () => {
  const singleData = useLoaderData();

  return (
    <div>
      <Banner singleData={singleData}></Banner>
      <FeaturedGardeners></FeaturedGardeners>
    </div>
  );
};

export default Home;
