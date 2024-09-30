import { FC } from "react"
import { IContainer } from "./type/container-type"

export const BaseContainer:FC<IContainer> = ({children}) => {
  return (
    <main className="container mt-4 md:mt-24">
        {children}
    </main>
  )
}
