'use client';
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import UsersNavbar from './UsersNavbar';

async function deleteUser(id: number | null) {
  await fetch(`/api/user`, { method: "DELETE", body:JSON.stringify({'id': id}) });
  debugger;
  location.reload();
}

async function page() {
  const usersResponse = await fetch(`http://localhost:3000/api/users`, {method: "GET"})
  const users = await usersResponse.json();
  const usersJson = JSON.stringify(users);
  const allUsers = JSON.parse(usersJson).users;
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
                <TableCell><Button onClick={() => deleteUser(user.id)} size='sm' color="danger" >Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  )
}

export default page