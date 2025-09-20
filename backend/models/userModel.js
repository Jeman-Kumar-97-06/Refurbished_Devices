const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new schema({
    fulln : {type:String,required:true},
    usrn  : {type:String,required:true},
    email : {type:String,required:true},
    pwd   : {type:String,required:true},
    pFp   : {type:String,required:false}
});

//Static methods to signup and login users : 

//Signup method : 
userSchema.statics.signup = async function (fulln,usrn,email,pwd,pFp){
    if (!fulln || !usrn || !email || !pwd) {
        throw Error("All fields must be filled!");
    }
    if (!validator.isStrongPassword(pwd)){
        throw Error("Password not strong enough!");
    }
    const exists = await this.find({email:email});
    if (exists){
        throw Error("Username already exists!");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pwd,salt);
    const user = await this.create({fulln,usrn,email,pws:hash,pFp});
    return user;
};

userSchema.statics.login = async function(email,pwd) {
    if (!email || !pwd) {
        throw Error("All fields must be filled!");
    }
    const user = await this.findOne({email});
    if (!user) {
        throw Error("Incorrect Username");
    };
    const match = await bcrypt.compare(pwd,user.pwd);
    if (!match) {
        throw Error("Incorrect Password!");
    };
    return user;
};

module.exports = mongoose.model("refffuser",userSchema);