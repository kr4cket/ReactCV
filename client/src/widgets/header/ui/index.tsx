import {useResize} from "@/shared/hooks";
import {MobHeader} from "../components/mob-header/MobHeader.tsx";
import {DescHeader} from "../components/desc-header/DescHeader.tsx";

export const Header = () => {
  const {isScreenMd} = useResize();

  if (!isScreenMd) {
    return (
      <MobHeader/>
    )
  }

  return (
    <DescHeader/>
  )
};