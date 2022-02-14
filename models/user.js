const { model, Schema } = require('mongoose');
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        account_balance: {
            type: String,
        },
        role: {
            type: String,
            required: true,
            default: '0'
        }
    },
    { timestamps: true }
);
module.exports = model('user', userSchema);