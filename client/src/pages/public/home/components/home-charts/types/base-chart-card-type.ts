import {ChartConfig} from "@/shared/ui/chart.tsx";
import {ChartDataType} from "@/pages/public/home/components/home-charts/types/chart-data-type.ts";

export type TBaseChartCard = {
    config: ChartConfig;
    title: string;
    description: string;
    data: ChartDataType[];
    footerTitle: string;
    footerDescription: string;
}