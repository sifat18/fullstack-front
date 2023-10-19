"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePageLayout from "./(withoutlayout)/layout";
import CarouselPage from "@/components/Carousel";
import Service from "@/components/Service";
import Review from "@/components/Review";
import Category from "@/components/Category";
import UpComingService from "@/components/UpComing";
import dynamic from "next/dynamic";
function Home() {
  return (
    <div>
      <HomePageLayout>
        <CarouselPage />
        <Service />
        <UpComingService />
        <Review />
        <Category></Category>
      </HomePageLayout>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
