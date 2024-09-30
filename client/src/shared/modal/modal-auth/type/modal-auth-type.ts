import { Dispatch, SetStateAction } from "react";

export interface IModalAuth {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export type TLoginData = {
    login: string,
    password: string,
}