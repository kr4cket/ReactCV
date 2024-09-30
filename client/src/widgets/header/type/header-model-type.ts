import { ReactNode } from "react";

type TListItem =  {
  title: string;
  descriptions: string;
  href: string;
  big?: boolean;
}

export type THeaderModel = {
  trigger: string;
  icon?: ReactNode;
  href?: string;
  itemsGroup?: Array<TListItem>;
}