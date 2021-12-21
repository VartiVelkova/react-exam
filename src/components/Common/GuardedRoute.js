import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";

const GuardedRoute = () => {
    const {isAuthenticated} = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default GuardedRoute;