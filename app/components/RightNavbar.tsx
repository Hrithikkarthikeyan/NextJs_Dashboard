'use client';
import React from 'react'
import {Navbar, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { signOut } from 'next-auth/react'
import BarsIcon from './ui/barsIcon';

const RightNavbar = ({session} : {session:any}) => {
  return (
    <Navbar className="bg-transparent">
      
      <NavbarContent className="hidden sm:flex" justify='start'>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <div
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                EN
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[200px]"
            itemClasses={{
              base: "gap-1",
            }}
          >
            <DropdownItem key="TM">
              TM
            </DropdownItem>
            <DropdownItem key="HI">
              HI
            </DropdownItem>
            <DropdownItem key="TL">
              TL
            </DropdownItem>
            <DropdownItem key="KL">
              KL
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {session?.user.username}
        </NavbarItem>
      </NavbarContent>
      <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session?.user.email}</p>
            </DropdownItem>
            <DropdownItem key="all_user"><Link href="/users">All Users</Link></DropdownItem>
            <DropdownItem key="update_profile"><Link href="/user/edit">Update Profile</Link></DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Link onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/sign-in`
              })}>
                Sign out
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <BarsIcon />
    </Navbar>
  )
}

export default RightNavbar