import { useEffect, useState } from "react";
import {SCREEN_ES, SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL, SCREEN_XXL} from "./const/use-resize-const.ts";

export const useResize = () => {
  const [pathWidth, setPathWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handlerResize = (event: Event) =>{
      setPathWidth((event.target as Window).innerWidth)
    }

    window.addEventListener('resize', handlerResize)

    return () => {
      window.removeEventListener("resize", handlerResize)
    }
  }, []);

  return{
    pathWidth,
    isScreenEs: pathWidth >= SCREEN_ES,
    isScreenSm: pathWidth >= SCREEN_SM,
    isScreenMd: pathWidth >= SCREEN_MD,
    isScreenLg: pathWidth >= SCREEN_LG,
    isScreenXl: pathWidth >= SCREEN_XL,
    isScreenXXL: pathWidth >= SCREEN_XXL
  }
}