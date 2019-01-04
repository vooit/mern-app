import mongoose from 'mongoose';

var validateEmail = function (email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
};

var Schema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'User first name is required']
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    eventDate: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});
export default mongoose.model('User', Schema);