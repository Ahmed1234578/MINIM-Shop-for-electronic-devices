const mongoose =require ("mongoose");

const userSchema = new mongoose.Schema({
name:string,
age:Number,
email:string
})

mongose.conect("mongodb://localhost/testdb")

