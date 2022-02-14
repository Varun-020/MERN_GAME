import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

function NotFound() {
    return (
        <>
            <Navbar />
            <div className="notFound">
                <Helmet>
                    <title>404 - not found</title>
                    <meta name="description" content="Oops not found something went wrong " />
                </Helmet>
                <div className="notFound__container">
                    <h1 className="notFound__container__h1">404 </h1>
                    <p className="notFound__container__p">
                        Oops ! Page Not Found
                    </p>
                </div>
            </div>
        </>

    )
}

export default NotFound;
