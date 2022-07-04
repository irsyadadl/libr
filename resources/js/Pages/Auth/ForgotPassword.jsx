import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';

import { Head, useForm } from '@inertiajs/inertia-react';
import InvalidFeedback from '@/Components/InvalidFeedback';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />

            <div className="text-muted mb-4">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && <div className="mb-2 alert alert-success">{status}</div>}

            <form onSubmit={submit}>
                <div className="mb-4">
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        isFocused={true}
                        errors={errors.email}
                        onChange={onChange}
                    />
                </div>

                <Button processing={processing}>
                    Email Password Reset Link
                </Button>
            </form>
        </Guest>
    );
}
