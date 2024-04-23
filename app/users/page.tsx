'use client';
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import UsersNavbar from './UsersNavbar';
import User from './User';

async function deleteUser(id: number | null, urlPrefix: string) {
  const deletedUser = await fetch(urlPrefix + `/api/user`, { next : { revalidate: 0}, method: "DELETE", body: JSON.stringify({'id': id}), headers:{
    accept: 'application/json',
    'User-agent': 'Dashboard',
  }});
  location.reload();
}

async function page() {
  try{
  var urlPrefix = ``
  const env = process.env.NODE_ENV
  if(env == "development"){
    urlPrefix = `http://localhost:3000`
  }
  else if (env == "production"){
    urlPrefix = `https://next-js-dashboard-pink-six.vercel.app`
  }
  const usersResponse = await fetch(urlPrefix + `/api/users`, { next : { revalidate: 0}, method: "GET"})
  const users = await usersResponse.json();
  const usersJson = JSON.stringify(users);
  const allUsers = JSON.parse(usersJson).users;
  // const userId = User();
  
  return (
    <div>
      <UsersNavbar />
      <div className=" rounded-md m-auto w-[800px]">
        <Table className="m-auto">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>DELETE USER</TableColumn>
          </TableHeader>
          <TableBody>
            {allUsers.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell><Button onClick={() => deleteUser(user.id, urlPrefix)} size='sm' color="danger" >Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  )
  }catch(error){
    console.log(error);
  }
}

export default page