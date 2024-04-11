// import { Prisma } from "@/lib/prisma.js"; 
// import { NextResponse } from "next/server";

// export async function GET(){
//   try{
//     const users = await Prisma.user.findMany();
//     return NextResponse.json({users: users, message: "Fetched All users Successfully"}, {status: 201});
//   } catch(error){
//       return NextResponse.json({message: error}, {status: 500});
//   }
// }

import { Prisma } from "@/lib/prisma.js"; 
import { NextResponse } from "next/server";

export async function GET(){
  try{
    const users = await Prisma.user.findMany()
    return NextResponse.json({users: users, message: "Fetched all users"}, {status: 201});
  } catch(error){
      return NextResponse.json({message: error}, {status: 500});
  }
}