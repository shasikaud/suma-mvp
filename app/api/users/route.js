import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import connectToMongoDB from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    console.log(`GET /api/users`)
    try {
        const url = new URL(req.url)
        const username = url.searchParams.get("username")
        console.log(`GET /api/users >> username: ${username}`)
        await connectToMongoDB();
        const user = await User.findOne({ username: username });
        return NextResponse.json({ data: user, error: null }, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ data: null, error: 'Internal server error!' }, { status: 500 });
    }
}

export const POST = async (req) => {
    console.log(`POST /api/users`)
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