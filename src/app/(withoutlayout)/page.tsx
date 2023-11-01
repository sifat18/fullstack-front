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
import Steps from "@/components/Steps";
import LearnMore from "@/components/LearnMore";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <CarouselPage /> */}
      <Service />
      <Steps />
      <UpComingService />
      <LearnMore />
      <Review />
      <Category></Category>
    </div>
  );
};
export default Home;
// export default dynamic(() => Promise.resolve(Home), { ssr: false });
