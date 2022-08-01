import {ReactNode} from "react";
// @ts-ignore
import Header from "./header.tsx";
// @ts-ignore
import Footer from "./footer.tsx";

import styles from '../styles/Home.module.scss'

export default function Layout({children}: {children:ReactNode}) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}