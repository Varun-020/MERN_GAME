import React from 'react';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../store/asyncMethods/AuthMethods';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginErrors, loading, loginSuccess } = useSelector(state => state.AuthReducer);
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleInputs = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    };

    const userLogin = (e) => {
        e.preventDefault();
        console.log('login attempt', state);
        dispatch(postLogin(state));
        setState({
            username: "",
            password: ""
        })

    };

    useEffect(() => {
        if (loginErrors) {
            if (loginErrors.length > 0) {
                loginErrors.map((error) => toast.error(error.msg));
            }
        }

    }, [loginErrors]);

    useEffect(() => {
        if (loginSuccess) {
            navigate('/');

        }

    }, [loginSuccess]);
    return (
        <>
            <Helmet>
                <title>User Login</title>
                <meta name="description" content="login to the website to access the games" />
            </Helmet>
            <Toaster
                position='top-right' reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
            <div className="col-5">
                <div className="account">
                    <div className="account__section">
                        <form onSubmit={userLogin}>
                            <div className="group">
                                <h3 className="form-heading">Login</h3>
                            </div>
                            <div className="group">
                                <input
                                    type="text"
                                    name="username"
                                    value={state.username}
                                    placeholder="Username"
                                    onChange={handleInputs}
                                    className="group__control"
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputs}
                                    value={state.password}
                                    placeholder="Enter Password"
                                    className="group__control"
                                />
                            </div>
                            <div className="group">
                                <input type="submit"
                                    value={loading ? '...' : 'Login'}
                                    name="" className="btn btn-default btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login