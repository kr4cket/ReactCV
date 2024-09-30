import { ModalAuth } from "@/shared/modal/modal-auth";
import { useState } from "react";
import {ITMOLogoSVG} from "@/shared/assets/svg";

export const DescHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen}/>

      <header className="fixed container py-4 rounded-lg left-1/2 top-4 -translate-x-1/2 z-50 border bg-white/10 dark:bg-black/10 backdrop-blur-md">
          <div className="flex justify-between items-center">
              <ITMOLogoSVG className="w-16" width={"100px"} height={"auto"}/>
              <h1 className="text-1xl font-bold">
                  Корешков Даниил
              </h1>
          </div>
      </header>
    </>
  );
};