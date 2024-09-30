import { TBaseChartCard } from "../types/base-chart-card-type.ts";

export const BaseChartModel:Array<TBaseChartCard> = [
    {
        config: {
            desktop: {
                label: "фраз в день: ",
                color: "hsl(var(--chart-1))",
            },
        },
        title: "Более 26 раз в день",
        description: "Можно услышать фразу 'почему мой код не работает'",
        data: [
            { month: "2019", desktop: 4 },
            { month: "2020", desktop: 12.3 },
            { month: "2021", desktop: 13.3 },
            { month: "2022", desktop: 15.6 },
            { month: "2023", desktop: 23.5 },
            { month: "2024", desktop: 26.9 },
        ],
        footerTitle: "Рост большой, аналитики не успевают считать",
        footerDescription: "Данные согласно моему рабочему дню",
    },
    {
        config: {
            desktop: {
                label: "Литров: ",
                color: "hsl(var(--chart-1))",
            },
        },
        title: "Более 1 млн. литров",
        description: "Энергетика было выпито за период учебы",
        data: [
            { month: "2020", desktop: 130 },
            { month: "2021", desktop: 173 },
            { month: "2022", desktop: 197 },
            { month: "2023", desktop: 233 },
            { month: "2024", desktop: 267 },
        ],
        footerTitle: "И это только начало",
        footerDescription: "Данные согласно горе выпитых банок",
    },
    {
        config: {
            desktop: {
                label: "",
                color: "hsl(var(--chart-1))",
            },
        },
        title: "В России 0,000003%",
        description: "Населения знает кто такой Даниил Корешков",
        data: [
            { month: "2020", desktop: 29.01 },
            { month: "2021", desktop: 30.32 },
            { month: "2022", desktop: 30.42 },
            { month: "2023", desktop: 30.81 },
            { month: "2023", desktop: 30.9 },
        ],
        footerTitle: "Но как же он старается улучшить этот показатель",
        footerDescription: "Данные согласно друзьям VK и Telegram",
    },
]