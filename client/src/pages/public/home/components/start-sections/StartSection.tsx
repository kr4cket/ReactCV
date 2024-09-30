import { PersonSVG } from "@/shared/assets/svg"
import { GoalsModel } from "./model/GoalsModel"
import { GoalsCard } from "./ui/GoalsCard"
import { Button } from "@/shared/ui/button"
import {Link} from "react-router-dom";

export const StartSection = () => {
  return (
    <section className="relative overflow-hidden z-20">
        <div className="absolute sm:right-0 z-0">
            <PersonSVG width={"385px"} height={"385px"} />
        </div>

        <div className="relative z-10">
            <div className="w-full md:w-1/2 flex flex-col gap-6 py-8 md:py-24 md:px-4">
                <h1 className="text-2xl font-bold">
                    Я — Корешков Даниил
                </h1>

                <p className="text-sm text-black/70 dark:text-white/50">
                    Я по своему основному роду деятельности <b>Backend-разработчик</b>.
                    <br/>Как я сделал такой красивый Лэндинг? Не знаю.
                    Спасибо <b>UI-китам</b>.
                    <br/>
                    А еще огромное спасибо <b>Голикову Ефиму</b>, который мне рассказал про существование таких штук. Без него вы бы ничего не увидели..
                </p>

                <Link className="w-full md:w-3/4 lg:w-1/4" to={"https://t.me/Kr4ckeT"}>
                    <Button>Связаться со мной</Button>
                </Link>
            </div>
            <h4 className="text-xl font-bold px-0 md:px-4 mb-2">Интересные (и не очень) факты</h4>
            <div className="flex flex-col justify-stretch mt-4 md:flex-row md:items-stretch gap-4 min-h-full">
            {
                GoalsModel.map((card, index) =>
                    <GoalsCard index={index + 1}>{card.children}</GoalsCard>)
            }
            </div>
        </div>
    </section>
  )
}
 