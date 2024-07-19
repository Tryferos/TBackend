import mongoose from "mongoose";
import { AppDocument } from ".";

const {Schema} = mongoose;
const {ObjectId} = Schema;

/*
    * Google User
*/

export interface User extends AppDocument {
    uid: string,
    displayName: string,
    email: string,
    photoURL: string,
    date: Date,
}

const UserSchema = new Schema<User>({
    uid: ObjectId,
    displayName: {type: String, required: true},
    email: {type: String, required:true},
    photoURL: {type: String, required: true,},
    date: {type: Date, default: Date.now},
});

export const UserModel = mongoose.model('User', UserSchema);
