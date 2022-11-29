import { IMenuItem } from '../interfaces/menu.interface';
import { createContext, PropsWithChildren, useState } from "react";


export interface IAppContext {
  menu: IMenuItem[];
  firstCategory: number;
  setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: 0});

export const AppContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

  const setMenu = (newMenu: IMenuItem[]) => {
    setMenuState(newMenu);
  };
  
  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
    {children}
  </AppContext.Provider>;
};