const express = require('exprss');
const router  = express.Router();
const multer  = require('multer');
const {v2:cloudinary} = require('cloudinary');
const fs      = require('fs');
const path    = require('path');

const {
    signupUser, loginUser
}             = require('../controllers/userControllers');