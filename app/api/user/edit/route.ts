import { Prisma } from "@/lib/prisma.js"; 
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';
import { compare } from "bcrypt";


const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string(),
    confirmPassword: z.string(),
    oldPassword: z.string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters')
  })

export async function POST(req: Request){
  try{
    const body = await req.json();

    const {email, username, password, confirmPassword, oldPassword} = userSchema.parse(body);

    const currentUser = await Prisma.user.findUnique({
      where: {email: email}
    });

    if(!currentUser || (password !== null && password !== confirmPassword && password.length < 8)){
      return NextResponse.json({user: null, message: "User does not exist"}, {status: 409});;
    }

    const existingPassword = currentUser.password || "";

    const passwordMatch = await compare(oldPassword, existingPassword);

    if(!passwordMatch){
      return NextResponse.json({user: null, message: "Password did not match"}, {status: 409});;
    }
    
    const finalPassword = (password === null)? existingPassword : await hash(password, 10);
    const updateUser = await Prisma.user.update({
      where: {
        email: email,
      },
      data: {
        username,
        email,
        password: finalPassword
      },
    })

    const { password: newUserPassword, ...rest } = updateUser;
    return NextResponse.json({user: rest, message: "User updated Successfully"}, {status: 201});
  } catch(error){
      return NextResponse.json({message: error}, {status: 500});
  }
}