import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";

const GuardedRoute = () => {
    const {isAuthentivated} = useAuthContext();

    return isAuthentivated ? <Outlet /> : <Navigate to='/login' />;
};

export default GuardedRoute;