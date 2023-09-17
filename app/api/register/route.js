import User from "@/models/user";
import connectToMongoDB from "@/utils/mongoDB";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    console.log('POST /api/register')
    try {
        const { username, password } = await req.json();
        await connectToMongoDB();
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password:hashedPassword });
        return new Response({status:200});
    } catch (e) {
        console.log(e);
        return new Response(`Server error.`).status(500);
    }
}