import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

function MasterRoute({ children }) {
    const { user } = useSelector((state) => state.MasterReducer);
    let { role } = user;

    return role === '2' ? children : <Navigate to="/masterLogin" />;
}
export default MasterRoute;