import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store';
import './main.scss';

import NotFound from './components/NotFound';
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import LoginModal from "./components/LoginModal";
import PrivateRoute from "./private/PrivateRoutes";
import MasterRoute from "./private/MasterRoute";
import AdminLogin from "./components/AdminLogin";
import AddAdmin from "./components/AddAdmin";
import Dashboard from "./components/Dashboard";
import MasterLogin from "./components/MasterLogin";
import RouteLinks from "./private/RouteLinks";
import TeenPatti from "./components/TeenPatti";
import Login from "./components/Login";

function App() {
  return (
    <Provider store={Store}>

      <Router>

        <Routes>
          <Route path="/addUser" exact element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          }
          />
          <Route path="/dashboard" exact element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          />
          <Route path="/addAdmin" exact element={
            <MasterRoute>
              <AddAdmin />
            </MasterRoute>
          }
          />
          <Route path="/teen-patti" exact element={
            <RouteLinks>
              <TeenPatti />
            </RouteLinks>
          }
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/adminLogin" exact element={<AdminLogin />} />
          <Route path="/masterLogin" exact element={<MasterLogin />} />
          <Route path="/" exact element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <FooterNav />
      </Router>
    </Provider>
  );
}

export default App;
