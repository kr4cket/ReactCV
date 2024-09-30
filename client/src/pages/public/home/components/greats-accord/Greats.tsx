import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel"
import {GreatCard} from "@/pages/public/home/components/greats-accord/ui/GreatCard.tsx";
import {GreatModel} from "@/pages/public/home/components/greats-accord/model/GreatModel.ts";

export const Greats = () => {
  return (
    <section className="px-4 md:px-0">
        <h4 className="text-xl font-bold px-0 md:px-4 mb-2">Мои достижения</h4>

        <div>
            <Carousel opts={{align: "start"}} className="grid grid-cols-1">
                <CarouselContent>
                    {
                        GreatModel.map(
                            (card) =>
                                <GreatCard card={card}/>
                        )
                    }
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious/>
            </Carousel>
        </div>
    </section>
  )
}
