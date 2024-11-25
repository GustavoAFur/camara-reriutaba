"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

import { FiChevronDown } from "react-icons/fi";
import { CouncilorsList } from "./CouncilorsList";

import Link from "next/link";

export function Header() {
  const menuItems = [
    { value: "INSTITUCIONAL", link: "/" },
    { value: "PARLAMENTARES", link: "/parlamentares" },
    { value: "ATIVIDADES", link: "/" },
    { value: "TRANSPARENCIA", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar isBlurred={false} position="static" className="py-4 bg-[#024c3d]">
        <NavbarContent className="sm:hidden px-0" justify="start">
          <NavbarBrand>
            <Image
              src={"/LOGO-camara-1.png"}
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer mx-4"
            />
            <p className="font-medium text-inherit text-xs text-white">
              Camara Municipal de<br></br> Reriutaba
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex justify-between">
          <NavbarBrand>
            <Link href="/">
              <Image
                src={"/LOGO-camara-1.png"}
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer mx-4"
              />
            </Link>
            <p className="font-medium text-inherit text-lg text-white">
              Camara Municipal<br></br>de Reriutaba
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-6" justify="center">
            <NavbarItem>
              <Link href="/" className="font-normal text-white text-base">
                institucional
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Button
                disableRipple
                onClick={toggleDropdown}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-normal text-white text-base"
                radius="sm"
                variant="light"
              >
                parlamentares
                <FiChevronDown />
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Link
                href="/parlamentares"
                className="font-normal text-white text-base"
              >
                atividades
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="font-normal text-white text-base"
              >
                transparência
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu className="mt-10">
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
                href={item.link}
              >
                {item.value}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {isOpen && (
        <div
          className={`${
            isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } transform transition-all duration-500 origin-top absolute left-0 top-auto w-full bg-white shadow-lg mt-2 pt-5`}
          style={{ zIndex: 1000 }}
        >
          <CouncilorsList />
          <Divider />
          <div className="w-full h-12 flex items-center justify-evenly m-0 p-2">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/parlamentares"
            >
              <p className="text-[#06624d] text-lg font-extralight">
                Vereadores
              </p>
            </Link>
            <Divider orientation="vertical" />
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/parlamentares/mesa-diretora"
              className="text-[#06624d] text-lg font-extralight"
            >
              Mesa diretora
            </Link>
            <Divider orientation="vertical" />
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/parlamentares"
              className="text-[#06624d] text-lg font-extralight"
            >
              Galeria
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
