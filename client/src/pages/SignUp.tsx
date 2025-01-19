import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const SignUp = (props: Props) => {
    const [formData, setFormData] = useState<Object>({});
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } catch (error) {

        }
    };

    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* Left side */}
                <div className='flex-1'>
                    <Link to={'/'} className='text-4xl font-bold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Gad's</span>
                        {' '}Blog
                    </Link>
                    <p className='text-sm mt-5'>You can sign up with your email and password or with Google.</p>
                </div>

                {/* Right Side */}
                <div className="flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your username' />
                            <TextInput
                                type='text'
                                placeholder='Username'
                                id='username'
                                value={username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Your email' />
                            <TextInput
                                type='email'
                                placeholder='email@gmail.com'
                                id='email'
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Your password' />
                            <TextInput
                                type='password'
                                placeholder='Password'
                                id='password'
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit'>
                            Sign Up
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to={'/sign-in'} className='text-blue-500'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;