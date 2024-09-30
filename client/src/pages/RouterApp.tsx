import {BrowserRouter, Route, Routes} from "react-router-dom";
import {INav, Paths} from "@/shared/nav";
import {HomeChunk} from "@/pages/public/home";
import {Layout} from "@/features/layout";

export const RouterApp = () => {
  const PublicPaths:Array<INav> = [
    {element: <HomeChunk/>, paths: Paths.HOME}
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          {
            PublicPaths.map(el => <Route element={el.element} path={el.paths} key={el.paths}/>)
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
};