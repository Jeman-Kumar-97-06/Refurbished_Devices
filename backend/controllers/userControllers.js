const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {name,password} = req.body;
    try {
        const user = await User.login(name,password);
        const token = createTOken(user._id);
        return res.status(200).json({...user,token});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

const signupUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const user = await User.signup(name,email,password);
        const token = createToken(user._id);
        return res.status(200).json({...user,token});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};