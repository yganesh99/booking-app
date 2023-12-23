import { PrismaClient } from "@prisma/client"
import {NextResponse} from "next/server"
import { ACCESS_TOKEN_SECRET } from "@/configs/envConfig";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export async function POST(request){
    try{
        const {email,password} = await request.json()

        if (!email || !password) {
            return NextResponse.json({message:"Email and password are required fields"}, {status:400})
        } else {
            const existingProfile = await prisma.user.findUnique({ 
                where: {
                    email: email 
                }
            });

            if (existingProfile) {
                return NextResponse.json({message:"Email already exists"}, {status:409})
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);

            const newProfile = await prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                }
            });

            return NextResponse.json({message:"Registration Successful", profile: newProfile}, {status:201})
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error", error:err}, {status:500})
    }
}