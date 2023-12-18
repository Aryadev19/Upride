"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets:['latin']
})
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Contact Us",
    "Driving School ?",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className={jakarta.className}>
      <NavbarContent className="px-10" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/upridelogo.png" width={100} height={100} alt="upride" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="start" className="hidden sm:flex px-8">
        <Image src="/dial.png" width={15} height={15} alt="dial" />
        <p>
         <span className="text-gray-500">CONTACT US:</span><b>+919119345867</b>
        </p>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 px-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Download App
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Are you a driving school ?
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center" className="px-10">
        <Image src="/bell.png" width={20} height={20} alt="bell" />

        <Image src="/Profile.png" width={120} height={120} alt="bell" />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
