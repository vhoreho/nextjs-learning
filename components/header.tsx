// @ts-ignore
import Link from "next/link"

import styles from '../styles/Stories.module.scss';

export default function Header() {
    return <header className={styles.header}>
        <Link href='/'>
            <a>Logo</a>
        </Link>
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.link}>Main</a>
            </Link>
            <Link href="/stories">
                <a className={styles.link}>Stories</a>
            </Link>
        </nav>
    </header>
}