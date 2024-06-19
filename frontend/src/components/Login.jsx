import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8005/api/auth/login', {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/builder');
        } catch (error) {
            console.error('Invalid credentials or server error', error);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="max-w-sm p-10 rounded-2xl w-2/3" style={{ background: "#F6FBF9" }}>
            <h1 className='text-center text-3xl font-bold mb-10'>Login</h1>
            <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500 text-center mb-5">{error}</div>}
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
                    Login
                </button>
                <div className='text-sm mt-3'>
                    <p className='text-center'>Don't Have An Account? <a href="/register" className='underline font-semibold'>Sign Up</a></p>
                </div>
            </form>
        </div>
    );
}
