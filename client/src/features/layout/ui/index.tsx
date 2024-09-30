import {Outlet} from "react-router-dom";
import {Header} from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BaseContainer } from "@/shared/components/container";

export const Layout = () => {
  return (
    <>
      <Header/>
      <BaseContainer>
        <Outlet/>
        <Footer/>
      </BaseContainer>
    </>
  );
};