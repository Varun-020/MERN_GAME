import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
const RouteLinks = ({ children }) => {
    const { user } = useSelector((state) => state.AdminReducer);
    return user ? children : <Navigate to="/login" />;
}
export default RouteLinks;