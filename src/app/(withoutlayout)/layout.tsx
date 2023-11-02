"use client";

import HeaderPage from "@/components/HeaderPage";
import Footer from "@/components/Footer";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderPage />
      <div>{children}</div>

      <Footer />
    </>
  );
};

export default HomePageLayout;
