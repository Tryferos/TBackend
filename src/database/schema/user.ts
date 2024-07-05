import mongoose from "mongoose";

const {Schema} = mongoose;
const {ObjectId} = Schema;

/*

    * Google User

*/

const UserSchema = new Schema({
    uid: ObjectId,
    displayName: String,
    email: String,
    photoURL: String,
    date: {type: Date, default: Date.now},
});

export const UserModel = mongoose.model('User', UserSchema);