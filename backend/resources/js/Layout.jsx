import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <div>
                    <h2> ----- My Layout Wrapper ----</h2>
                    {/*<Link href="/">Home</Link>
                    <Link href="/demo" method="get" as="button">
                        Demo
                    </Link>*/}
                </div>
            </header>
            {children}
        </>
    );
}
