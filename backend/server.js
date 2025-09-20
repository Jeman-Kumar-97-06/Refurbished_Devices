require('dotenv').config();
const exp  = require('express');
const app  = exp();
const cors = require('cors');
const mong = require('mongoose');

app.use(exp.json());
app.use(cors());

mong.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to mongoose and listening at the designated port")
    })
}).catch(err=>{console.log(err)})