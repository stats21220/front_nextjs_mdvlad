import { IFooterProps } from "./Footer.props";
import styles from './Footer.module.css';


export const Footer = ({...props}: IFooterProps) => {
  return (
    <footer {...props}>
      Footer
    </footer>
  );
};