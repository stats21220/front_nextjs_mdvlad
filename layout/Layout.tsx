import { Feedback } from "./Feedback/Feedback";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import { Subscribe } from "./Subscribe/Subscribe";


export const Layout = ({children}: ILayoutProps) => {
  return (
    <>
      <Header/>
        <div>
            {children}
        </div>      
      <Feedback/>
      <Subscribe/>
      <Footer/>
    </>
  );
};