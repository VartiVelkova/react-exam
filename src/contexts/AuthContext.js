import { createContext, useContext } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage.js";

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocaleStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData)
    };

    const logout = () => {
        setUser(initialAuthState)
    };

    return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated: user.email}}>
        {children}
    </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};

