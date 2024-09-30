import {BaseChart} from "./ui/BaseChart"
import {BaseChartModel} from "@/pages/public/home/components/home-charts/model/BaseChartModel.tsx";

export const HomeCharts = () => {
    return (

        <section className="relative overflow-hidden z-20 my-6">
            <h4 className="text-xl font-bold px-0 md:px-4 mb-2">Важная статистика</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    BaseChartModel.map(
                        (card) =>
                            <BaseChart card={card}/>
                    )
                }
            </div>
        </section>
    )
}
