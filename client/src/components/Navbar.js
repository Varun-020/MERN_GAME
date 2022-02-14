import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';
import Modal from './Modal';

function Navbar() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.AuthReducer);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('myToken');
        navigate('/')
        dispatch({ type: LOGOUT });
    };
    const Links = user ? (
        <div className='navbar__right'>

            <li className='navbar__right_login'>
                <span onClick={logout}>Logout</span>
            </li>
        </div>
    ) : (
        <div className='navbar__right'>

            <li className='navbar__right_login'>
                <span onClick={handleClickOpen}>Login</span>
                {/* <Link to='/login'>Login</Link> */}
            </li>
        </div>
    );


    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__row">
                        <div className="navbar__left">
                            {
                                user ? <div className="navbar__left_info">
                                    <Link to='/' className='account_balance'>{user.username}</Link>
                                    <div className="navbar__left_info_bal">
                                        <span>&nbsp;&nbsp;Main:&nbsp;&#8377;{user.account_balance}</span>
                                        <span style={{ color: 'red', fontWeight: "700" }}>&nbsp;&nbsp;Expo:&nbsp;&#8377;100.00</span>
                                    </div>

                                </div>

                                    :
                                    <Link to="/" >GAME</Link>
                            }
                        </div>
                        <div className="navbar__right">

                            {Links}
                        </div>
                    </div>
                </div>
            </nav>
            <Modal open={open} setOpen={setOpen} />
        </>
    )
}

export default Navbar