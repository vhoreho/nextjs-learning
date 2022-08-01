import {ReactNode} from "react";
// @ts-ignore
import Header from "./header.tsx";
// @ts-ignore
import Footer from "./footer.tsx";

export default function Layout({children}: {children:ReactNode}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}