import "./style/global.css";
import {RouterApp} from "@/pages/RouterApp.tsx";
import {Suspense} from "react";

export const App = () => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <RouterApp/>
    </Suspense>
  );
};