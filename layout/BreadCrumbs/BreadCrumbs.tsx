import { IBreadCrumbs } from "./BreadCrumbs.props";
import styles from './BreadCrumbs.module.css';
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';

export const BreadCrumbs = ({className} : IBreadCrumbs) => {
    const {menu} = useContext(AppContext);

    const pageRoute = 'page-products';

    const router =  useRouter();

    const route = router.asPath.split('/');

    const build = () => {
        const breadCrumbs: {title: string, route: string}[] = []

        if (menu) {
            for (const f of menu.pages) {
                if (route[2] === f.route) {
                    breadCrumbs.push({title: f.title, route: `/${pageRoute}/${f.route}`})
                    for (const s of f.sec) {
                        if (route[3] === s.route) {
                            breadCrumbs.push({title: s.title, route: `/${pageRoute}/${f.route}/${s.route}`})
                            for (const t of s.third) {
                                if (route[4] === t.route) {
                                    breadCrumbs.push({title: t.title, route: `/${pageRoute}/${f.route}/${s.route}/${t.route}`})
                                }
                            }
                        }
                    }
                }
            }
        }

        return breadCrumbs;
        // со временем доделать 4 лвл
    }
    
    return (
        <div className={className}>
            <Link 
                className={styles.link} 
                href="/">/Главная
            </Link>
            {
                // newBreeadCrumbs.map((b) => <Link key={b.route} className={styles.link} href={b.route}>/{b.title}</Link>)
                build().map((r) => {
                    return (
                        <>
                            <Link 
                                className={cn(
                                    styles.link
                                )} 
                                key={r.route} 
                                href={r.route}>/ {r.title}
                            </Link>
                        </>
                    )
                })
            }
        </div>
    )
}
