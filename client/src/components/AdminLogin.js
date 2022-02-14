import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { adminLogin } from '../store/asyncMethods/AdminMethods';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginErrors, loading, loginSuccess } = useSelector((state) => state.AdminReducer);
    const [state, setState] = useState({
        username: '',
        password: '',
    });
    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const userLogin = (e) => {
        e.preventDefault();
        dispatch(adminLogin(state));
        setState({
            username: "",
            password: ""
        });

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
            navigate('/dashboard')
        }
    }, [loginSuccess])
    return (
        <>
            <Helmet>
                <title>User Login</title>
                <meta name='description' content='User login form' />
            </Helmet>
            <div className='row mt-80'>
                <div className='col-8'>
                    <Toaster
                        position='top-right'
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                <div className='col-4'>
                    <div className='account'>
                        <div className='account__section'>
                            <form onSubmit={userLogin}>
                                <div className='group'>
                                    <h3 className='form-heading'>Admin Login</h3>
                                </div>
                                <div className='group'>
                                    <input
                                        type="text"
                                        name="username"
                                        value={state.username}
                                        placeholder="Username"
                                        onChange={handleInputs}
                                        className="group__control"
                                    />
                                </div>
                                <div className='group'>
                                    <input
                                        type='password'
                                        name='password'
                                        value={state.password}
                                        onChange={handleInputs}
                                        className='group__control'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='group'>
                                    <input
                                        type='submit'
                                        className='btn btn-default btn-block'
                                        value={loading ? '...' : 'Login'}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminLogin;