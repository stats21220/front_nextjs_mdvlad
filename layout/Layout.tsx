import { FunctionComponent } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import { Subscribe } from "./Subscribe/Subscribe";


const Layout = ({children}: ILayoutProps) => {
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};