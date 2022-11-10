import { HTMLAttributes } from 'react';
import { ReactNode, DetailedHTMLProps } from 'react';


export interface IPtag extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l';
  color: 'black' | 'white';
  children: ReactNode;
}