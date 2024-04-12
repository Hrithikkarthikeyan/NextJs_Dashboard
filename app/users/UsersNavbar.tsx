'use client';
import React from 'react'
import { HandMetal } from 'lucide-react';
import UserAccountnav from '../components/ui/UserAccountnav';
import {Navbar as NavbarComponent, NavbarBrand, Input, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


function UsersNavbar() {
  return (
    <NavbarComponent>
        <NavbarBrand className="mr-4">
          <Link href='/'>
            <HandMetal />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3 content-center text-center" justify='center'>
          <NavbarItem>
            <Link color="foreground" href="/admin" className="mr-10">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/users" aria-current="page" color="primary" className="mr-10">
              Users
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/user/edit" className="mr-10">
              Edit Profile
            </Link>
          </NavbarItem>
        </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          // startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <UserAccountnav />
      {/* <Dropdown placement="bottom-end">
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
          <DropdownItem key="admin"><Link href="/admin">Dashboard</Link></DropdownItem>
          <DropdownItem key="all_user"><Link href="/users">All Users</Link></DropdownItem>
          <DropdownItem key="update_profile"><Link href="/user/edit">Update Profile</Link></DropdownItem>
        
        </DropdownMenu>
      </Dropdown> */}
    </NavbarComponent>
  )
}

export default UsersNavbar