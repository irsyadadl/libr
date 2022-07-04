import React from 'react';

export default function InvalidFeedback({ forInput }) {
    return forInput ? (
        <span className="invalid-feedback">{forInput}</span>
    ) : null;
}
