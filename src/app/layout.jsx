import './globals.css'
import { getDefaultMetadata } from "@/config/html-meta"
import BootstrapLoader from "@/component/bootstrap-loader";
import Nav from "@/component/nav/nav";

export function generateMetadata() {
    return getDefaultMetadata();
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <BootstrapLoader/>
            
            <body>
                <Nav/>
                {children}
            </body>
        </html>
    )
}
