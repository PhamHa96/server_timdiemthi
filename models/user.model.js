var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

var User = mongoose.model('user', userSchema);
module.exports = User;
