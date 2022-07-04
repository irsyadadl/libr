import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import InvalidFeedback from './InvalidFeedback';

export default function Input({
    type = 'text',
    isFocused,
    className,
    errors = null,
    ...props
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <input
                {...props}
                type={type}
                className={clsx(
                    'form-control',
                    className,
                    errors && 'is-invalid'
                )}
                ref={input}
            />
            <InvalidFeedback forInput={errors} />
        </>
    );
}
