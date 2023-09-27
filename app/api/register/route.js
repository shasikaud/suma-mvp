import User from "@/models/user";
import connectToDB from "@/utils/database";
import bcrypt from "bcrypt"

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
                completedStates: [],
                businessSector: 'Tech consultancy / development for clients',
                calendarYear: '2022',
                fullTimeEmployees: 0,
                hasOffice: 'NOT-DEFINED',
                useCloud: 'NOT-DEFINED',
                cloudProvider: 'NOT-DEFINED',
                awsFootprint: 0,
                gcpFootprint: 0,
                azureFootprint: 0,
                laptopCount: 0,
                desktopCount: 0,
                mobileCount: 0,
                screenCount: 0,
                wfhEmployeePerct: 0,
                workingDaysAvg: 0,
                walkBikeScooterPerct: 0,
                trainPerct: 0,
                dailyDistanceHomeWorkTrain: 0,
                busPerct: 0,
                dailyDistanceHomeWorkBus: 0,
                carPerct: 0,
                dailyDistanceHomeWorkCar: 0,
                shortHaulFlights: 0,
                mediumHaulFlights: 0,
                longHaulFlights: 0,
            } 
        });
        return new Response({status:200});
    } catch (e) {
        console.log(e);
        return new Response(`Server error.`).status(500);
    }
}