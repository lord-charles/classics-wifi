"use client";
import { IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import TemporaryDrawer from "./Drawer";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999] overflow-hidden w-screen"
      style={{ backgroundColor: "#280351" }}
    >
      <div className="flex lg:justify-end md:justify-end xxs:justify-between w-full">
        <div className=" flex justify-between relative top-[13px] lg:pr-[320px] md:pr-[20px]">
          <TemporaryDrawer />
          <IconButton className="text-[14px] text-white rounded-md">
            <p>CALL TO ORDER @ 0740315545 | 0705881279</p>
          </IconButton>
        </div>
      </div>
      <div className="flex justify-between items-center text-white lg:mx-[300px] md:mx-[10px] p-4">
        <IconButton className="rounded-sm">
          <div className="font-serif text-[35px] text-white font-bold animate-pulse">
            CLASSICS WIFI
          </div>
        </IconButton>

        <div className="flex space-x-3 items-baseline xxs:invisible md:visible lg:visible">
          <IconButton className="text-white rounded-md">
            {" "}
            <Link href={"/"}>Home</Link>
          </IconButton>
          <IconButton className="text-white rounded-md">Help</IconButton>
          <IconButton className="text-white rounded-md">
            <Link href={"/login"}>Login</Link>
          </IconButton>
          <IconButton className="text-white rounded-md">
            <Link href={"/register"}>Register</Link>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
