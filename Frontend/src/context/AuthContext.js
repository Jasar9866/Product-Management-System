import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // Initially check if the user is logged in by checking local storage
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userId') ? true : false);

    // Effect to run once on component mount
    useEffect(() => {
        // Check local storage or cookies here if needed
        const loggedInUser = localStorage.getItem('userId');
        if (loggedInUser) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
