import User from "@/models/user";
import connectToDB from "@/utils/database";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    console.log('POST /api/register')
    try {
        const { email, password, firstName, lastName, companyName } = await req.json();
        await connectToDB();
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ 
            email, 
            password:hashedPassword, 
            firstName,
            lastName,
            companyName,
            data: {
                state: 'CREATED',
            } 
        });
        return new Response({status:200});
    } catch (e) {
        console.log(e);
        return new Response(`Server error.`).status(500);
    }
}