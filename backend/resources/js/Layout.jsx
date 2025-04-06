import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Layout({ children }) {
    const [n, setN] = useState(0);
    const increment = () => {
        setN(n + 1);
    };

    return (
        <>
            <header>
                <nav>
                    <h2> ----- My Layout Wrapper -----</h2>
                    <Link href="/demo" method="get" as="button">
                        'Layout' Demo Page
                    </Link>

                    <Link href="/" method="get" as="button">
                        'Layout' Home Page
                    </Link>
                    <button onClick={increment}>Increment {n}</button>
                </nav>
            </header>
            {children}
        </>
    );
}
