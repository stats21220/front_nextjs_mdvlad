import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum SortEnum {
    Price,
    Rating,
    Date,
    Name
}

export interface ISort extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) =>  void; 
}
