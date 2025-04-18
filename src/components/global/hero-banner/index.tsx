import React from "react";
import Carousel from "./carousel";
import { getBanner } from "@/actions/banner";

const HeroBanner = async () => {
  const { data } = await getBanner();
  const slides = data?.filter((banner) => banner.bannerStatus === "ACTIVE");

  return <Carousel slides={slides} />;
};

export default HeroBanner;
