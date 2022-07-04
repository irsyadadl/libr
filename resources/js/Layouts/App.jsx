import Navbar from '@/Components/Navbar';
import React from 'react';

export default function App({ children }) {
    return (
        <div>
            <Navbar />
            <div className="pt-5">{children}</div>
        </div>
    );
}
