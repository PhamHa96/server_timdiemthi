var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schoolSchema = new Schema({
    maT:{
        type: String,
        required:true
    },
    tenTruong: {
        type: String,
        required:true
    },
    diemchuan: {
        type: Number,
        required:true
    },
    khuvuc:{
        type: String,
        required:true
    }
    

})
var school = mongoose.model('school',schoolSchema);
module.exports = school;
