import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        // Validate username and password (you can add more validation logic here)

        // Save user data to local storage
        const userData = { username, password };
        localStorage.setItem('user', JSON.stringify(userData));

        // Optionally, you can redirect the user to a different page after registration
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
            <button onClick={handleRegistration}>Sign Up</button>
        </div>
    );
};

export default RegistrationForm;
