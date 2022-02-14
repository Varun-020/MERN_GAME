import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import LoginModal from './LoginModal';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({ open, setOpen }) {

    const [showLoginModal, setShowLoginModal] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };
    const showLogin = (e) => {
        console.log('show login');
        setOpen(false);
        setShowLoginModal(true);
    }
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Non-Gambling Territories"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className='content'>
                        <span className='content_para'>
                            Connecting to our site from non gambling countries,it will be User's responsibility
                            to ensure that their use of the service is lawful.
                        </span>
                        <span className='content_span'>
                            Underage gambling is Prohibited.
                        </span>
                        <span className='content_action'>
                            Please confirm if you are 18 years old and above as of today.
                        </span>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div className='content_action_confirm'>
                        <Button onClick={showLogin} variant="contained"
                            color="secondary">
                            Confirm
                        </Button>
                        <Button onClick={handleClose} variant="outlined">
                            Exit
                        </Button>
                    </div>

                </DialogActions>
            </Dialog>
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
        </div>
    );
}

export default Modal