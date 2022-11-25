import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItem } from '../../interfaces/menu.interface';


export interface IMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: IMenuItem[]
}