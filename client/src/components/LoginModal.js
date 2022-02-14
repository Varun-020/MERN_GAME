import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../store/asyncMethods/AuthMethods';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LoginModal({ showLoginModal, setShowLoginModal }) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginErrors, loading, loginSuccess } = useSelector(state => state.AuthReducer);
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleClose = (e) => {
        setShowLoginModal(false);
    }
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
        else {
            navigate('/')
        }

    }, [loginErrors]);

    useEffect(() => {
        if (loginSuccess) {
            setShowLoginModal(false);

        }

    }, [loginSuccess]);

    return (
        <div className='login_modal'>
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
            <Dialog fullScreen open={showLoginModal} onClose={handleClose} TransitionComponent={Transition}>
                <div className='close_icon'>
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize='large' />
                    </IconButton>

                </div>
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
            </Dialog>
        </div>
    )
}

export default LoginModal