import { usePage } from '@inertiajs/inertia-react';
import React from 'react';
import DropdownMenu from './DropdownMenu';
import NavLink from './NavLink';

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3 border-bottom shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Laravel
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            href={route('home')}
                            active={route().current('home')}
                        >
                            Home
                        </NavLink>
                    </ul>

                    {!auth.user ? (
                        <ul className="navbar-nav">
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <DropdownMenu trigger={auth.user.name}>
                                <DropdownMenu.Link href={route('dashboard')}>
                                    Dashboard
                                </DropdownMenu.Link>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link
                                    method="POST"
                                    as="button"
                                    href={route('logout')}
                                >
                                    Logout
                                </DropdownMenu.Link>
                            </DropdownMenu>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
