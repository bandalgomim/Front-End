import Link from "next/link";
import Image from "next/image";
import NavSearch from "@/component/nav/nav-search";

export default function Nav() {
    return <nav className="navbar bg-info">
        <div className="container-fluid">
            <Link href="/" className="navbar-brand">
                <Image src="/logo.svg" width="50" height="50" alt="logo"/>
                Ezports
            </Link>
            <NavSearch />
        </div>
    </nav>;
}
