"use client";
import { createContext, useContext, useState } from "react";
const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        document.cookie = `user=${JSON.stringify(userData)}; path=/`;
        setUser(userData);
    };

    const logout = () => {
        document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        setUser(null);
    };

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};