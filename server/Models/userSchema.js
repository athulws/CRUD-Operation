const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mernstack')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // email unique aayathkond aan ee "unique" enna key use cheythath
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

});

//models defining

const users = new mongoose.model("users",userSchema); // "users" is collection name 2um same peru thanne kodukkanam
                                                      // userSchema mukalil ulla userSchema aan  

//models defining

module.exports = users;