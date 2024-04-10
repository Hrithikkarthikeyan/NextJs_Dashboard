import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function PageNavbar() {
  const navigationRoutes = ["Overview", "Clients", "Account", "Payments"];

  return (
    <div className="max-w-screen-lg">
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive className="mr-10">
          <Link color="foreground" href="#">
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem className="mr-10">
          <Link href="#" aria-current="page">
            Clients
          </Link>
        </NavbarItem>
        <NavbarItem className="mr-10">
          <Link color="foreground" href="#">
            Account
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Payments
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex mr-10">
          <Link href="#">Manage</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default PageNavbar