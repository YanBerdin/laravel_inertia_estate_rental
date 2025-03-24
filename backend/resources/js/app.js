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

createInertiaApp({
    resolve: (name) => {
        const pages = require.context("./Pages", true, /\.jsx$/);
        return pages(`./${name}.jsx`).default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
