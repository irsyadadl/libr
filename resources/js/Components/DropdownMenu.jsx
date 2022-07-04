import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

function Link({ children, ...props }) {
    return (
        <li>
            <InertiaLink className="dropdown-item" {...props}>
                {children}
            </InertiaLink>
        </li>
    );
}

function Divider() {
    return (
        <li>
            <hr className="dropdown-divider" />
        </li>
    );
}

function DropdownMenu({ trigger, children }) {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {trigger}
            </a>
            <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
            >
                {children}
            </ul>
        </li>
    );
}

DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
export default DropdownMenu;
