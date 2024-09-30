import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card.tsx";
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/shared/ui/chart.tsx";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import {TrendingUp} from "lucide-react";
import {FC} from "react";
import {TBaseChartCard} from "@/pages/public/home/components/home-charts/types/base-chart-card-type.ts";


export const BaseChart: FC<{ card: TBaseChartCard }> = ({card}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={card.config}>
                    <BarChart accessibilityLayer data={card.data}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    {card.footerTitle} <TrendingUp className="h-4 w-4"/>
                </div>
                <div className="leading-none text-muted-foreground">
                    {card.footerDescription}
                </div>
            </CardFooter>
        </Card>
    )
}