import mongoose from "mongoose";

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (e) {
        console.log(`Error connecting to monogDB: ${e}`);
    }
}

export default connectToMongoDB;