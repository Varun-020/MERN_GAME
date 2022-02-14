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
import Login from './Login';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LoginModal({ showLoginModal, setShowLoginModal }) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginSuccess } = useSelector(state => state.AuthReducer);

    const handleClose = (e) => {
        setShowLoginModal(false);
    };
    useEffect(() => {
        if (loginSuccess) {
            setShowLoginModal(false);
            navigate('/');
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
                <Login />
            </Dialog>
        </div>
    )
}

export default LoginModal