import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
function FooterNav() {

    const navigate = useNavigate();
    const redirectHome = (e) => {
        navigate('/')
    }
    return (
        <>
            <nav className="footer_navbar">
                <div className="container">
                    <div className="navbar__row">
                        <IconButton onClick={redirectHome}>
                            <HomeIcon fontSize='large' color="primary" />
                        </IconButton>
                        <IconButton>
                            <AccountBoxIcon fontSize='large' color="primary" />
                        </IconButton>


                    </div>
                </div>
            </nav>

        </>
    )
}

export default FooterNav