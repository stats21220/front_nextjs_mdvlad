import { IHeaderProps } from "./Header.props";
import styles from './Header.module.css';


export const Header = ({...props}: IHeaderProps) => {
  return (
    <header {...props}>
      Header
    </header>
  );
};