import { Link } from "@inertiajs/react";
import { useState } from "react";
import "../css/style.css";

export default function Layout({ children }) {
    const [n, setN] = useState(0);
    const increment = () => {
        setN(n + 1);
    };

    return (
        <>
            {/*<header>
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
            */}

            <header className="nav">
                <Link href="/" className="nav_logo" title="Page d'accueil">
                    <img src="/images/logo.svg" alt="" />
                </Link>
                <ul className="nav_menu">
                    <li>
                        <Link href="/acheter">Acheter</Link>
                    </li>
                    <li>
                        <Link href="/actualite">Actualité</Link>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button className="nav_burger">
                    <span />
                </button>
            </header>

            {children}

            <footer className="footer_container">
                <div className="footer_col">
                    <div className="footer_title">Pages</div>
                    <ul>
                        <li>
                            <a href="#">À propos</a>
                        </li>
                        <li>
                            <a href="#">Conditions d'utilisations</a>
                        </li>
                        <li>
                            <a href="#">Politiques de confidentialités</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_col">
                    <div className="footer_title"> Pages</div>
                    <ul>
                        <li>
                            <a href="#">A propos</a>
                        </li>
                        <li>
                            <a href="#">Conditions d'utilisations</a>
                        </li>
                        <li>
                            <a href="#">Politiques de confidentialités</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_col">
                    <div className="footer_credits">
                        © 2020 Grafikart Real Estate, Inc.
                    </div>
                </div>
            </footer>
        </>
    );
}
