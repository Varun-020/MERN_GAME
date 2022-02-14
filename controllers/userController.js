const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const createToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '7d' });
}

module.exports.registerValidations = [
    body('username').not().isEmpty().trim().withMessage('username required'),
    body('password').isLength({ min: 8 }).withMessage('password must be 8 character long'),
];


module.exports.register = async (req, res) => {

    console.log('-----------"data"');
    console.log(req.body)
    const { username, password, account_balance } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const checkUser = await User.findOne({ username });
        if (checkUser) {
            return res.status(400).json({ errors: [{ msg: 'username is already taken' }] });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({
                username, password: hash, account_balance
            });
            const token = createToken(user);
            return res.status(200).json({ msg: 'your account has been created successfully', token });
        }
        catch (erorr) {
            return res.status(500).json({ errors: error });
        }
    }
    catch (error) {
        return res.status(500).json({ errors: error });
    }
};

module.exports.loginValidations = [
    body('username').not().isEmpty().trim().withMessage('Enter username'),
    body('password').not().isEmpty().withMessage('Enter password'),
];

module.exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            const matched = await bcrypt.compare(password, user.password)
            if (matched) {
                const token = createToken(user);
                return res.status(200).json({ msg: 'login successful', token })
            }
            else {
                return res.status(401).json({ errors: [{ msg: 'password is not correct' }] });
            }
        } else {
            return res.status(404).json({ errors: [{ msg: 'user not found' }] });
        }
    }
    catch (error) {
        return res.status(500).json({ errors: error });
    }
};
module.exports.adminLoginValidations = [
    body('username').not().isEmpty().trim().withMessage('Enter username'),
    body('password').not().isEmpty().withMessage('Enter password'),
];

module.exports.adminLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        // console.log('--user-------');
        // console.log(user);
        if (user) {
            if (parseInt(user.role) === 1) {
                const matched = await bcrypt.compare(password, user.password)
                if (matched) {
                    const token = createToken(user);
                    return res.status(200).json({ msg: 'login successful', token })
                }
                else {
                    return res.status(401).json({ errors: [{ msg: 'password is not correct' }] });
                }
            } else {
                return res.status(401).json({ errors: [{ msg: 'You are not a Admin' }] });
            }

        } else {
            return res.status(404).json({ errors: [{ msg: 'user not found' }] });
        }
    }
    catch (error) {
        return res.status(500).json({ errors: error });
    }
};
module.exports.masterLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        // console.log('--user-------');
        // console.log(user);
        if (user) {
            if (parseInt(user.role) === 2) {
                const matched = await bcrypt.compare(password, user.password)
                if (matched) {
                    const token = createToken(user);
                    return res.status(200).json({ msg: 'login successful', token })
                }
                else {
                    return res.status(401).json({ errors: [{ msg: 'password is not correct' }] });
                }
            } else {
                return res.status(401).json({ errors: [{ msg: 'You are not a Master' }] });
            }

        } else {
            return res.status(404).json({ errors: [{ msg: 'user not found' }] });
        }
    }
    catch (error) {
        return res.status(500).json({ errors: error });
    }
};

module.exports.adminRegisterValidations = [
    body('username').not().isEmpty().trim().withMessage('username required'),
    body('password').isLength({ min: 8 }).withMessage('password must be 8 character long'),
];
module.exports.addAdmin = async (req, res) => {

    console.log('-----------"data"');
    console.log(req.body)
    const { username, password, account_balance } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const checkUser = await User.findOne({ username });
        if (checkUser) {
            return res.status(400).json({ errors: [{ msg: 'username is already taken' }] });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({
                username, password: hash, account_balance, role: "1"
            });
            const token = createToken(user);
            return res.status(200).json({ msg: 'your account has been created successfully', token });
        }
        catch (erorr) {
            return res.status(500).json({ errors: error });
        }
    }
    catch (error) {
        return res.status(500).json({ errors: error });
    }
};