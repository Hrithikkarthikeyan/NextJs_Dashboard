'use client';
import { Button } from '@nextui-org/react'
import React from 'react'

async function deleteUser(id: number | null) {
  await fetch(`/api/user`, { method: "DELETE", body:JSON.stringify({'id': id}) });
  location.reload();
}
function DeleteUserButton(id: any) {
  return (
    <Button onClick={() => deleteUser(id)} size='sm' color="danger" >Delete</Button>
  )
}

export default DeleteUserButton