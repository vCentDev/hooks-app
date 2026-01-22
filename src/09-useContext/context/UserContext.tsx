import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'cheking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // State
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;
    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('cheking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {
        const user = users.find((user) => user.id === userId)

        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null)
            setAuthStatus('not-authenticated')
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString())
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated')
        setUser(null)
        localStorage.removeItem('userId',)
    }

    useEffect(() => {
        const storeUserId = localStorage.getItem('userId')

        if (storeUserId) {
            handleLogin(Number(storeUserId))
            return;
        }

        handleLogout();
    }, [])

    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        isAuthenticated: authStatus === 'authenticated',
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}
