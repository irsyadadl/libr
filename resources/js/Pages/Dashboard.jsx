import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard({ auth }) {
    return (
        <div>
            <Head title="Dashboard" />
            <div className="container">
                Hi {auth.user.name}, you are now logged in.
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <App children={page} />;
