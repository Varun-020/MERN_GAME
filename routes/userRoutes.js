const app = require('express');
const router = app.Router();
const { register, registerValidations, login, loginValidations, adminLoginValidations, adminLogin,
    addAdmin, adminRegisterValidations, masterLogin } = require('../controllers/userController');

router.post('/addUser', registerValidations, register);
router.post('/login', loginValidations, login);
router.post('/adminLogin', adminLoginValidations, adminLogin);
router.post('/masterLogin', adminLoginValidations, masterLogin);
router.post('/addAdmin', adminRegisterValidations, addAdmin);

module.exports = router;