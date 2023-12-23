import { PrismaClient } from "@prisma/client"
import {NextResponse} from "next/server"
import { ACCESS_TOKEN_SECRET } from "@/configs/envConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
            
            if (!existingProfile) {
                return NextResponse.json({message:"Email doesn't exist, SignUp"}, {status:401})
            }

            const passwordMatch = await bcrypt.compare(
                password,
                existingProfile.password
            );

            if (!passwordMatch) {
                return NextResponse.json({message:"Invalid email or password"}, {status:401})
            }

            const userId = existingProfile._id;
            
            const accessToken = jwt.sign(
                {
                    userId: userId,
                },
                ACCESS_TOKEN_SECRET,
                {
                  expiresIn: "1d",
                }
            );
            
        return NextResponse.json({message:"Login Successful", accessToken:accessToken}, {status:200})
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({message:"Internal Server Error", error:err}, {status:500})
    }
}