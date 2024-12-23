import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { loginUser } from '../../api/authApi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await loginUser({ email, password });
        if (data.token) {
            setAuthTokens(data.token);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
