import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const GET = async (req) => {
    // const reqParsed = await req.json();
    // console.log(reqParsed)
    // const id = 1234;
    // console.log(`Get user ${id} req`)
    try {
        await connectToDB();
        const id = '6505b8feea4bbdded417392b';
        const user = await User.findById(id);
        if (!user) return new Response(`User not found`).status(400);  
        return new Response(JSON.stringify(user), {status:200});
    } catch (e) {
        console.log(e);
        return new Response(`Server error.`).status(500);
    }
}

export const POST = async (req) => {
    try {
        const reqData = await req.json();
        await connectToDB();
        const filter = { id: reqData._id.toString() };
        const update = {
            data: reqData.data
        };
        await User.findOneAndUpdate(filter, update)
        return new Response({status:200});
    } catch (e) {
        console.log(e);
        return new Response(`Server error.`).status(500);
    }
}