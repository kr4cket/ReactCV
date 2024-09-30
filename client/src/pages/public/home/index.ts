import {lazy} from "react";

export const HomeChunk = lazy(
  () => import("./ui/index.tsx").then(
    m => ({default: m.Home})
  )
)