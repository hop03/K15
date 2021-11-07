const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    name: {type: String, maxLength: 30},
    age: {type: Number, maxLength: 3},
    image: {type: String, maxLength: 255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Users', Users);
  