import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { IFirstItem } from "../../interfaces";
import { IСhildСategories } from "./СhildСategories.props";

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
                                <Link 
                                    key={`/page-products/${f.route}/${s.route}/${t.route}`} 
                                    href={`/page-products/${f.route}/${s.route}/${t.route}`}>
                                        {t.title}
                                </Link>
                            ))
                        }

                        if (route[route.length - 1] === f.route) {
                            return (
                                <Link 
                                    key={`/page-products/${f.route}/${s.route}`} 
                                    href={`/page-products/${f.route}/${s.route}`}>
                                        {s.title}
                                </Link>
                            )
                        }

                })
            }
        })
    }

    return (
        <div>{build()}</div>
    )
}