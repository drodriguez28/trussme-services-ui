import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="!bg-amber-300 py-8 mb-5">
      <NavbarToggle className="!text-black hover:!bg-amber-300 focus:!ring-black [&>svg]:!text-black" />
      <NavbarCollapse className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <NavbarLink as={Link} to="/" className="mx-4 !text-black">
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/auto-detailing"
          className="mx-4 !text-black"
        >
          Auto Detailing
        </NavbarLink>
        <NavbarLink as={Link} to="/cleaning" className="mx-4 !text-black">
          Cleaning
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/landscaping"
          className="mx-4 !text-black"
        >
          Landscaping
        </NavbarLink>
        <NavbarLink as={Link} to="/condo" className="mx-4 !text-black">
          Condo
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/contact-me"
          className="mx-4 !text-black"
        >
          Contact Me
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};