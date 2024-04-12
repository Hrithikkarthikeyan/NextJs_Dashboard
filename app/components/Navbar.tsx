// import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './ui/UserAccountnav';
import {Navbar as NavbarComponent, NavbarBrand, NavbarContent, NavbarItem, Link, Input} from "@nextui-org/react";
import BarsIcon from './ui/barsIcon';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
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
      {session?.user ? (
            <UserAccountnav />
          ) : (
            <Link className={buttonVariants()} href='/sign-in'>
              Sign in
            </Link>
          )}
        <BarsIcon />
    </NavbarComponent>
  );
};

export default Navbar;