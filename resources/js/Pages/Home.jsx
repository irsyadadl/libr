import React from 'react';
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'

export default function Home() {
    return (
        <div>
            <Head title="Breeze with Bootstrap" />
            <div className="container">
                For you!
            </div>
        </div>
    );
}

Home.layout = page => <App children={page}/>
