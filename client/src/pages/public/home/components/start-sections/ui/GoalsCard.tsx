import { FC, ReactNode } from "react"

export const GoalsCard:FC<{index: number, children: ReactNode}> = ({children, index}) => {
  return (
    <article className="h-32 md:h-auto  border-slate-100 bg-white/10 dark:border-white/25 border backdrop-blur-md flex flex-col gap-2 w-full md:w-1/3 p-4 rounded-md">
        <h4 className="text-xl font-medium">{index}.</h4>
        <p className="text-sm">{children}</p>
    </article>
  )
}
