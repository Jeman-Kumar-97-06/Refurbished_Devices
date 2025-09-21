const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {name,password} = req.body;
}