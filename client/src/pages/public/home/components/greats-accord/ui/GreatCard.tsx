import {Card, CardContent, CardHeader} from "@/shared/ui/card.tsx";
import {FC} from "react";
import {CarouselItem} from "@/shared/ui/carousel.tsx";
import {TGreatCardModel} from "@/pages/public/home/components/greats-accord/types/great-card-type.ts";
import {ITMOLogoSVG} from "@/shared/assets/svg";


export const GreatCard: FC<{ card: TGreatCardModel }> = ({card}) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <Card className="">
                    <CardHeader>
                        <ITMOLogoSVG className="w-32" width={"32px"} height={"auto"}/>,
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2.5 h-60 p-10">
                        <div>
                            <b>Название:</b> {card.title}
                        </div>
                        <div>
                            <b>Описание:</b> {card.description}
                        </div>
                        <div>
                            <b>Дополнительная информация:</b> {card.options}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    )
}