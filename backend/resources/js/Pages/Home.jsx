import { Link } from "@inertiajs/react";
//import Layout from "../Layout";

export default function Home({ name, randomString }) {
    return (
        <div>
            <h1>Welcome to the Home Page {name}!</h1>
            {/*<Link href="/demo">Go to Demo Page</Link>*/}

            {/*<Link href="/demo" method="get" as="button">
                From Home to Demo Page
            </Link>*/}

            <Link href="/" method="get" as="button">
                random string : {randomString}
            </Link>
        </div>
    );
}

// layout for the page
// Home.layout = (page) => <Layout children={page} />
