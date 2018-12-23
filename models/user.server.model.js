import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt:{
        type: Date,
        default: Date.now
    },
    fullName: String
});
export default mongoose.model('User', Schema);