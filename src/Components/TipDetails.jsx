import React from "react";
import { useLoaderData } from "react-router";
import TipCard from "./TipCard";

const TipDetails = () => {
  const detailsData = useLoaderData();
  (detailsData);

  return (
    <div>
    <TipCard detailsData={detailsData}></TipCard>
    </div>
  );
};

export default TipDetails;
