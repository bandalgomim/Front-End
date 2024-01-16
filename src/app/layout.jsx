import './globals.css'
import { getDefaultMetadata } from "@/config/html-meta"
import BootstrapLoader from "@/component/bootstrap-loader";

export function generateMetadata() {
    return getDefaultMetadata();
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <BootstrapLoader/>
            <body>{children}</body>
        </html>
    )
}
