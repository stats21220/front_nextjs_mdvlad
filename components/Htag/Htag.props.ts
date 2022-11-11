import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  color: 'black' | 'white' | 'primary';
  weight?: 500 | 700 | 900;
  children: ReactNode;
}