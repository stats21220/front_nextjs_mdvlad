import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Feedback } from "./Feedback/Feedback";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import { Subscribe } from "./Subscribe/Subscribe";
import styles from './Layout.module.css';


const Layout = ({children}: ILayoutProps) => {
  return (
    <>
      <Header className={styles.header}/>
        <div className={styles.body}>
            {children}
        </div>      
      <Feedback className={styles.feedback}/>
      <Subscribe className={styles.subscribe}/>
      <Footer className={styles.footer}/>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props}/>
        </Layout>
      </AppContextProvider>
    );
  };
};