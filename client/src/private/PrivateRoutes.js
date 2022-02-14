import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user } = useSelector((state) => state.AdminReducer);
    let { role } = user;


    return role === '1' ? children : <Navigate to="/adminLogin" />;
}
export default PrivateRoute;