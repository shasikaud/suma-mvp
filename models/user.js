import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'Username already exists'],
        required: [true, 'Username is required'] 
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    data: {
        type: Object
    }
})

const User = models.User || model("User", UserSchema);
export default User;