"use client";
import { packages2 } from "@/utils/data";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Custom = () => {
  return (
    <div className="bg-gray-100 overflow-hidden w-screen">
      <div className="lg:mx-[300px] md:mx-[10px] relative top-[20px]">
        <p className="text-black text-[40px] font-serif font-bold text-center ">
          Get more customized packages from us.
        </p>

        <div className="grid   md:grid-cols-3 lg:grid-cols-3 xxs:grid-cols-2 place-items-center mt-8">
          {packages2.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center space-y-3 border p-8 border-purple-500 bg-white rounded-md mb-6 shadow-md"
                key={index}
              >
                <Image
                  src={item.images}
                  alt="image"
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-black font-serif">Up to</p>
                <p className="text-black  text-[30px]">{item.speed} Mbps</p>
                <p className="text-black text-[14px]">
                  Upload & download speed
                </p>
                <p className="text-black text-[20px] font-bold">
                  Ksh {item.price}{" "}
                </p>
                <p className="text-black">+ free installation</p>
                <div>
                  {" "}
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.streaming} streaming</p>
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.devices} devices</p>
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.period}</p>
                  </div>
                  <div className="text-purple-700 mt-[15px]">
                    <Button variant="outlined" color="inherit">
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Custom;
