import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8005/api/auth/register', {
                email,
                password
            });
            navigate('/login');
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div className="max-w-sm p-10 rounded-2xl w-2/3" style={{ background: "#F6FBF9" }}>
            <h1 className='text-center text-3xl font-bold '>Create An Account</h1>
            <p className='mb-10 text-center'>Create an account to enjoy our service for free!</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    style={{ background: "#D2649A" }}
                    className="text-white rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                    Sign Up
                </button>
                <div className='text-sm mt-3'>
                    <p className='text-center'> Do you have an account ?  <a href="/login" className='underline font-semibold'>Login Now </a></p>
                </div>
            </form>
        </div>
    );
}
