import {Link} from '@inertiajs/react';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {/*<Link href="/demo">Go to Demo Page</Link>*/}

            <Link href="/demo" method="get" as="button">Go to Demo Page</Link>

        </div>
    );
}
