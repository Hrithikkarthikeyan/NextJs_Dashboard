import { Prisma } from "@/lib/prisma.js"; 
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })

export async function POST(req: Request){
  try{
    const body = await req.json();

    const {email, username, password} = userSchema.parse(body);

    const existingUserByMail = await Prisma.user.count({
      where: {email: email}
    });
    if(existingUserByMail>0){
      return NextResponse.json({user: null, message: "User Already exists with this email"}, {status: 409});
    }

    // const existingUserByUsername = await Prisma.user.findUnique({
    //   where: {username: username}
    // });
    // if(existingUserByUsername){
    //   return NextResponse.json({user: null, message: "User Already exists with this username"}, {status: 409});
    // }
    
    const hashedPassword = await hash(password, 10);
    const newUser = await Prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json({user: rest, message: "User created Successfully"}, {status: 201});
  } catch(error){
      return NextResponse.json({message: "Something went wrong!"}, {status: 500});
  }
}

export async function DELETE(req: Request) {
  try{
    // const searchParams = req.nextUrl.searchParams;
    // const id = searchParams.get('id');
    const body = await req.json();

    const userId = body.id;
    const deleteUser = await Prisma.user.delete({
      where: {
        id: userId,
      },
    })
    return NextResponse.json({user: deleteUser, message: "User Deleted Successfully"}, {status: 201});
  }catch(error){
    return NextResponse.json({message: "Something went wrong!"}, {status: 500});
  }
}