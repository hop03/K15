const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
        console.log('successful connect');
    } catch (error) {
        console.log('failure connect !');
    }
};

module.exports = {connect};
