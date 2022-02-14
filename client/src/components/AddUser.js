import React from 'react';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '../store/asyncMethods/AuthMethods';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

function AddUser() {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { loading, registerErrors, user } = useSelector((state) => state.AuthReducer);
    const [state, setState] = useState({
        username: '',
        password: '',
        account_balance: ''
    });

    const handleInputs = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const userRegister = async e => {
        e.preventDefault();
        console.log('register attempt', state);
        dispatch(postRegister(state));
        setState({
            username: '',
            password: '',
            account_balance: ''
        })
        if (!registerErrors) {
            navigate('/')
        }
    }
    useEffect(() => {
        if (registerErrors) {
            if (registerErrors.length > 0) {
                registerErrors.map((error) =>
                    (toast.error(error.msg)));
            }
        }
    }, [registerErrors]);

    return (
        <>
            <Navbar />
            <Helmet>
                <title>User Register</title>
                <meta name="description" content="user registration page" />
            </Helmet>
            <div className="row mt-80">
                <div className="col-8">
                    <Toaster
                        position='top-right' reverseOrder={false}
                        toastOptions={{
                            style: {
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={userRegister} >
                                <div className="group">
                                    <h3 className="form-heading">Register</h3>
                                </div>
                                <div className="group">
                                    <input
                                        type="text"
                                        name="username"
                                        value={state.username}
                                        onChange={handleInputs}
                                        placeholder="Enter username"
                                        className="group__control"
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={state.password}
                                        onChange={handleInputs}
                                        placeholder="Password"
                                        className="group__control"
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="number"
                                        name="account_balance"
                                        value={state.account_balance}
                                        onChange={handleInputs}
                                        placeholder="opening_balance"
                                        className="group__control"
                                    />
                                </div>
                                <div className="group">
                                    <input type="submit"
                                        value={loading ? '...' : 'Register'}
                                        className="btn btn-default btn-block" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddUser;
