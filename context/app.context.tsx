import { IMenuItem } from '../interfaces/menu.interface';
import { createContext, PropsWithChildren, useState } from "react";


export interface IAppContext {
  menu: IMenuItem | null;
  setMenu?: (newMenu: IMenuItem) => void;
}

export const AppContext = createContext<IAppContext>({menu: null});

export const AppContextProvider = ({menu, children}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem | null>(menu);

  const setMenu = (newMenu: IMenuItem) => {
    setMenuState(newMenu);
  };
  
  return <AppContext.Provider value={{menu: menuState, setMenu}}>
    {children}
  </AppContext.Provider>;
};