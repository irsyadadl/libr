import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import InvalidFeedback from '@/Components/InvalidFeedback';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="alert alert-success" role="alert">
                    {status}
                </div>
            )}
            <div className="mb-4">
                <h4 className="card-title">Login</h4>
                <div className="text-muted">Please enter your credentials.</div>
            </div>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <Label forInput="email" value="Email" />
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className={clsx(errors.email && 'is-invalid')}
                        autoComplete="username"
                        isFocused={true}
                        onChange={onChange}
                        errors={errors.email}
                    />
                </div>

                <div className="mb-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={clsx(errors.password && 'is-invalid')}
                        autoComplete="current-password"
                        onChange={onChange}
                        errors={errors.email}
                    />
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                    <Checkbox
                        label="Remember me"
                        name="remember"
                        value={data.remember}
                        onChange={onChange}
                    />
                    {canResetPassword && (
                        <Link
                            className="text-decoration-none"
                            href={route('password.request')}
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <Button processing={processing}>Log in</Button>
                <div className="mt-4 text-muted">
                    <Link
                        className="text-decoration-none"
                        href={route('register')}
                    >
                        I don't have account!
                    </Link>
                </div>
            </form>
        </>
    );
}

Login.layout = (page) => <Guest children={page} />;
