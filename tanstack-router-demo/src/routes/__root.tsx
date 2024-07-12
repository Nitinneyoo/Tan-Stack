
// creating root file where all the link will be defined
// put all the files inside route folder whome will be used for routing in the app
// inside routes folder we have profile.tsx and index.tsx and also __root.tsx file which is providing the root route


import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const activeProps = {
    style: {
        fontWeight: 'bold',
    }
}

export const Route = createRootRoute({
    component: () =>
        <>
            <h1>Nitin SIngh</h1>
            <ul>
                <li><Link to="/" activeProps={activeProps}>Home</Link></li>
                <li><Link to="/profile" activeProps={activeProps}>Profile</Link></li>
                <li>
                    <Link
                        to="/pokemon"
                        activeProps={activeProps}>
                        pokemons
                    </Link>
                </li>

            </ul>

            <Outlet />
        </>,
})


