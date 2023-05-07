import Image from "next/image";
import React from "react";
import Button from "./Button";
import { BiPlusCircle } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCalendar, removeFromCalendar } from "../redux/activitiesSlice";

const EventCard = ({activity}) => {
  const addedActivities=useSelector((state=>state.activities.addedToCalendar))
  const dispatch=useDispatch()
   const date=new Date(activity.date)
   const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
   const days = [ "Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  return (
    <div className=" container mx-auto mb-28 ">
      <div className="bg-secondary md:h-auto h-[410px]  w-full pr-10 flex flex-col md:flex-row items-center  md:pr-4 relative ">
        <div className="bg-black md:w-[200px] w-full md:h-full h-[212px] absolute"></div>
        <div className=" flex flex-col md:flex-row items-center justify-center ml-9 md:mr-4 z-20 absolute md:static">
        <div className="md:mr-10  flex md:flex-col flex-row justify-center items-center gap-2 md:text-primary  text-white text-2xl md:text-sm lg:text-base font-acme leading-6">
            <p className="  items-center md:text-primary text-2xl ">
              {date.getDate()}</p>
              <p className="text-lg ">{months[date.getMonth()]}</p>
              <p className="text-base font-light ">
                {days[date.getDay()]}
              </p>
              <p className="text-sm font-light text-center">
                {`${date.getHours()}:${date.getMinutes() === 0 ? "00" : date.getMinutes()}`}
              </p>
            
          </div>

          <div className="">
            <div className="bg-[#F07266] md:top-10 top-4 md:left-[92px] left-[-60px] absolute w-24 h-5 flex justify-center items-center z-30">
              <p className="lg:text-sm text-xs font-bold text-white leading-6 uppercase ">
                {activity.type}
              </p>
            </div>
            <div className="relative my-4 w-[308px] h-[172px]">
            <Image src={activity.image} fill alt="" />
            </div>
            
          </div>

          <div className="ml-4 md:py-7 flex flex-col mt-2 md:gap-1 gap-[10px] w-full">
            <h3 className="text-lg md:text-sm lg:text-lg font-acme ">
              {activity.activity_name}
            </h3>
            <h4 className="text-xs lg:text-sm text-place leading-6">
              {activity.place}
            </h4>
            <div className="">
              <p className="text-xs lg:text-base break-normal w-fit leading-6 flex md:h-[78px] h-6 text-ellipsis overflow-hidden ">
                {activity.desc}
              </p>
              <Link href={`details/`+activity.id}> <p className="text-xs lg:text-base flex justify-end"> Detaylı Bilgi</p></Link>
            </div>
          </div>
          <div className="flex gap-3 md:flex-col md:ml-8 mt-2 md:mt-0">
            <Button />{
              addedActivities.includes(activity.id)?<h3 className="lg:text-base text-sm leading-6 flex items-center gap-2 cursor-pointer" onClick={()=>dispatch(removeFromCalendar(activity.id))}><FaCheckCircle size={30} className="text-primary"/> Takvime Eklendi</h3>:<h3 className="lg:text-base text-sm leading-6 flex items-center gap-2 cursor-pointer" onClick={()=>dispatch(addToCalendar(activity.id))}><BiPlusCircle size={30}/> Takvime Ekle</h3>

            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
