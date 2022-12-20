import { IBreadCrumbs } from "./BreadCrumbs.props";
import styles from './BreadCrumbs.module.css';
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import Link from "next/link";
import { useRouter } from "next/router";
import { IFirstItem } from "../../interfaces";

export const BreadCrumbs = ({} : IBreadCrumbs) => {
    const {menu, setMenu} = useContext(AppContext);

    const router =  useRouter();

    const route = router.asPath.split('/');
    
    const newBreeadCrumbs: {title: string, route: string}[] = []

    if(menu) {
        for (const f of menu.pages) {
            if (route.includes(f.route)) {
                newBreeadCrumbs.push({route: `/page-products/${f.route}`, title: f.title})
                for (const s of f.sec) {
                    if (route.includes(s.route)) {
                        newBreeadCrumbs.push({route: `/page-products/${f.route}/${s.route}`, title: s.title})
                    }
                }
            }
        }
    }

    return (
        <div>
            <Link className={styles.link} href="/">Главная</Link>{newBreeadCrumbs.map((b) => <Link className={styles.link} href={b.route}>{b.title}</Link>)}
        </div>
    )
}