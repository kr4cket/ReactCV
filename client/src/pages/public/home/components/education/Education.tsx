import { AccordionProduts } from "./ui/AccordionProduts"
import {ITMOLogoSVG} from "@/shared/assets/svg";

export const Education = () => {
  return (
    <section className="my-6 flex flex-col md:flex-row md:items-stretch gap-6">
        <div className="md:w-1/2 md:border rounded-md flex flex-col justify-center gap-4 px-4 py-2">
            <h4 className="text-xl font-bold">
                Мое образование
            </h4>

            <div className="flex gap-6">
                <p className="text-sm text-black/70 dark:text-white/50">
                    В данный момент я студент Передовой Инженерной Школы (ПИШ) ИТМО, обучаюсь в Альметьевском домене
                    школы
                    ALMET TECH.
                </p>
                <ITMOLogoSVG className="w-64" width={"100px"} height={"auto"}/>,
            </div>

            <p className="text-sm text-black/70 dark:text-white/50">
                Направление: Технология разработки коммерческого программного обеспечения
            </p>
        </div>

        <div className="px-4 md:py-0 md:w-1/2">
            <AccordionProduts/>
        </div>
    </section>
  )
}
