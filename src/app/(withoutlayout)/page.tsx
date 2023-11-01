"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePageLayout from "./layout";
import CarouselPage from "@/components/Carousel";
import Service from "@/components/Service";
import Review from "@/components/Review";
import Category from "@/components/Category";
import UpComingService from "@/components/UpComing";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <CarouselPage /> */}
      <Service />
      <UpComingService />
      <Review />
      <Category></Category>
    </div>
  );
};
export default Home;
// export default dynamic(() => Promise.resolve(Home), { ssr: false });
