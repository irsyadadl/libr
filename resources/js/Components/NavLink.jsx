import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx'

export default function NavLink({ href, active, children }) {
    return (
        <li className="nav-item">
            <Link className={clsx('nav-link', active && 'active')} href={href}>
                {children}
            </Link>
        </li>
    );
}
