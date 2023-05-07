"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { BiPlusCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import data from "../../utils/activities.json";
import Image from "next/image";

const ActivityDetails = () => {
  const [filtered, setFiltered] = useState();
  const router = useRouter();

  const query = router.query;

  const id = query.id;

  useEffect(() => {
    setFiltered(data.find((activity) => activity.id === parseInt(id)));
  }, [id]);
  const date = new Date(filtered && filtered.date);
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  return (
    <div className=" container mx-auto mb-20 flex flex-col justify-between gap-60 md:gap-4 ">
      <div className="bg-secondary md:h-auto h-full  w-full  flex flex-col md:flex-row items-center  md:pr-4 relative ">
        <div className="bg-black md:w-[200px] w-full md:h-full h-[212px] absolute"></div>
        <div className=" flex flex-col md:flex-row items-center ml-9 mr-4 z-20 absolute md:static">
          <div className="md:mr-10 items-center flex md:flex-col gap-2 mt-2 items-center justify-center  md:text-primary  text-white text-2xl md:text-sm lg:text-base font-acme">
            <p className="  items-center md:text-primary text-2xl ">
              {date.getDate()}</p>
              <p className="text-lg ">{months[date.getMonth()]}</p>
              <p className=" font-light ">
                {days[date.getDay()]}
              </p>
              <p className="text-sm font-light ">
                {`${date.getHours()}:${date.getMinutes() === 0 ? "00" : date.getMinutes()}`}
              </p>
            
          </div>

          <div className="">
            <div className="bg-[#F07266] z-30 md:top-10 top-4 md:left-[92px] left-[-60px] absolute w-24 h-5 flex justify-center items-center">
              <p className="lg:text-sm text-xs font-bold text-white leading-6 uppercase">
                {filtered && filtered.type}
              </p>
            </div>
            <div className="relative w-[308px] h-[172px] md:w-[500px] md:h-[300px]">
              <Image
                src={filtered && filtered.image}
                fill
                className="object-cover "
                alt=""
              />
            </div>
          </div>

          {/* <div className="flex gap-3 md:flex-col md:ml-8 mt-2 md:mt-0">
            <Button />
            <h3 className="lg:text-base text-sm leading-6 flex items-center gap-2">
              <BiPlusCircle /> Takvime Ekle
            </h3>
          </div> */}
        </div>
      </div>
      <div className="ml-4 md:py-7 flex flex-col mt-2 md:gap-1 gap-[10px]">
        <h3 className="text-lg md:text-sm lg:text-lg font-acme ">
          {filtered && filtered.activity_name}
        </h3>
        <h4 className="text-xs lg:text-sm text-place leading-6">
          {filtered && filtered.place}
        </h4>
        <div className="">
          <p className="text-xs lg:text-base break-normal w-full leading-6 flex  text-ellipsis overflow-hidden ">
            {filtered && filtered.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
