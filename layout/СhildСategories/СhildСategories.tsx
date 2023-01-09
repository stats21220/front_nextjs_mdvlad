import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { IFirstItem } from "../../interfaces";
import { IСhildСategories } from "./СhildСategories.props";
import styles from './СhildСategories.module.css';

export const СhildСategories = ({}: IСhildСategories) => {

    const router = useRouter()

    const {menu} = useContext(AppContext);

    const build = () => {
        const route = router.asPath.split('/')
        return menu?.pages.map((f: IFirstItem) => {
            if (route[2] === f.route) {
                return f.sec.map((s) => {
                        if (route[route.length - 1] === s.route) {
                            return s.third.map((t) => (
                                <Link className={styles.link}
                                        key={`/page-products/${f.route}/${s.route}/${t.route}`} 
                                        href={`/page-products/${f.route}/${s.route}/${t.route}`}>
                                    <div className={styles.wrapper_link}>                                
                                        <span>{t.title}</span>
                                    </div>
                                </Link>
                            ))
                        }

                        if (route[route.length - 1] === f.route) {
                            return (
                                    <Link className={styles.link}
                                        key={`/page-products/${f.route}/${s.route}`} 
                                        href={`/page-products/${f.route}/${s.route}`}>
                                        <div className={styles.wrapper_link}>                                
                                            <span>{s.title}</span>
                                        </div>
                                    </Link>
                            )
                        }

                })
            }
        })
    }

    return (
        <div className={styles.wrapper}>{build()}</div>
    )
}