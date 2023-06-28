"use client";
import config from "@/utils/axiosconfig";
import { base_url } from "@/utils/baseUrl";
import { packages } from "@/utils/data";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import NestedModal from "./modal";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwMDI1ZDJmYWQ2OWIwNzM3MDBhYjgiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODYzMTIwMTEsImV4cCI6MTc3MjcxMjAxMX0.r_KLvrWa-BotpCsysEUbRs2iccwetr4SXQ4OcuOqKCA";

const Packages = () => {
  const [amount, setAmount] = useState(1);
  const [open, setOpen] = useState(false);
  const [bandwidth, setBandwidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [validity, setValidity] = useState(0);

  const data = { bandwidth, price, speed, validity };
  // console.log(data);

  const wifipackage = ({ bandwidth, price, speed, validity }) => {
    setBandwidth(bandwidth);
    setPrice(price);
    setSpeed(speed);
    setValidity(validity);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100 overflow-hidden w-screen">
      <NestedModal setOpen={setOpen} open={open} data={data} />
      <div className="lg:mx-[300px] md:mx-[10px]">
        <p className="text-black text-center pt-4 font-serif">
          Prefer to order by phone? <a href="#">0740315545 | 0705881279.</a>
        </p>
        <p className="text-black text-[40px] font-serif font-bold text-center ">
          How much speed do you need?
        </p>

        <div className="grid  md:grid-cols-3 lg:grid-cols-3 xxs:grid-cols-2 place-items-center mt-8">
          {packages.map((item, index) => {
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
                <p className="text-black text-[25px] font-bold">
                  Ksh {item.price}{" "}
                  <a className="text-[20px] relative top-[-3px]">
                    / {item.validity}
                  </a>
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
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() =>
                        wifipackage({
                          price: item.price,
                          bandwidth: item.period,
                          speed: item.speed,
                          validity:
                            item.validity === "month"
                              ? "30days"
                              : item.validity === "week"
                              ? "7days"
                              : item.validity,
                        })
                      }
                    >
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

export default Packages;
