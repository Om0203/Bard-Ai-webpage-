import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if user exists and the entered password matches
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('Login successful!');
            // You can redirect the user to the dashboard or another page after successful login
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign In</button>
        </div>
    );
};

export default LoginForm;
