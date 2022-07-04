import React from 'react';

export default function Checkbox({ label, ...props }) {
    return (
        <div className="form-check">
            <input
                {...props}
                className="form-check-input"
                id="flexCheckDefault"
                type="checkbox"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {label}
            </label>
        </div>
    );
}
