"use client";
import config from "@/utils/axiosconfig";
import { base_url } from "@/utils/baseUrl";
import { packages } from "@/utils/data";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwMDI1ZDJmYWQ2OWIwNzM3MDBhYjgiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODYzMTIwMTEsImV4cCI6MTc3MjcxMjAxMX0.r_KLvrWa-BotpCsysEUbRs2iccwetr4SXQ4OcuOqKCA";

const Packages = () => {
  const [amount, setAmount] = useState(1);
  const paymentData = {
    phone_number: `254${740315545}`,
    amount,
  };

  const payNow = async () => {
    console.log("starting payment");
    try {
      const api = axios.create({
        baseURL: base_url,
        headers: config(token).headers,
      });

      const res = await api.post(`/payment`, paymentData);
      console.log(res);

      if (res.data.invoice.state === "PENDING") {
        console.log("success", res.data.invoice);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gray-100 overflow-hidden w-screen">
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
                  <a className="text-[20px] relative top-[-3px]">/ month</a>
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
                      onClick={() => payNow()}
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
