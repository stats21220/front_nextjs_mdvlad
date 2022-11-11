import { HTMLAttributes, ReactNode } from 'react';
import { DetailedHTMLProps } from 'react';


export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'm';
  color?: 'cream';
  href?: string;
  children: ReactNode;
}