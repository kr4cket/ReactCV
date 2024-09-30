import { FC } from "react";
import { StartSection } from "../components/start-sections/StartSection";
import { Education } from "@/pages/public/home/components/education/Education.tsx";
import { Greats } from "../components/greats-accord/Greats.tsx";
import { HomeCharts } from "../components/home-charts/HomeCharts";

export const Home:FC = () => {
  return (
    <>
      <StartSection/>
      <Education/>
      <HomeCharts/>
      <Greats/>
    </>
  );
};