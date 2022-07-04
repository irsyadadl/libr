import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="w-50 p-5">
                <div className="card">
                    <div className="card-body p-4">{children}</div>
                </div>
            </div>
        </div>
    );
}
