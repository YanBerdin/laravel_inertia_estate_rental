// require('./bootstrap');
/*import { App } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';

const el = document.getElementById('app');

render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name => require(`./Pages/${name}`).default}
    />,
    el
);

*/
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";

createInertiaApp({
    resolve: (name) => {
        // const pages = require.context("./Pages", true, /\.jsx$/);
        //    return pages(`./${name}.jsx`).default;
        //},
        const pages = require.context("./Pages", true, /\.jsx$/);
        const page = pages(`./${name}.jsx`).default;

        // Wrap the page with the Layout if it doesn't already have one
        page.layout = page.layout || ((page) => <Layout>{page}</Layout>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
