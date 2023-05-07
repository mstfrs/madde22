import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActivities,loadFilteredActivities } from "../redux/activitiesSlice";


const Navbar = () => {
  const [filterBy, setFilterBy] = useState("")
  const [categoryId, setCategoryId] = useState("0")

  const activities=useSelector((state)=>state.activities.activities)
  const types=useSelector((state)=>state.activities.activities.map((item)=>item.type))
  
  const dispatch=useDispatch()

  const handleClick=  (props)=>{
   dispatch(loadFilteredActivities(activities.filter((activity)=>activity.type===filterBy)))

  

}

  useEffect(() => {
    handleClick()
  }, [filterBy])
  



  return (
    <div className="  flex flex-col ">
      <div className='flex items-center flex-col mb-10'>
        <Link href="/">
        <Image className='mt-9 mb-14 hidden md:block ' src="/images/logo.png" width={60} height={63} alt='logo'/>
</Link>
<h3 className='font-bold text-2xl leading-10 '>ETKİNLİKLER</h3>
       </div>
     <div className="flex md:justify-center pl-4 md:h-20 h-16 justify-start gap-8 leading-[26px] overflow-x-auto whitespace-nowrap container mx-auto px-10 ">
      <Link onClick={(e)=>{
      dispatch(loadFilteredActivities(activities)) 
      setCategoryId(e.target.id)}} href="/">
     <p id="0" className={` cursor-pointer ${0==categoryId && "text-primary font-bold underline underline-offset-[22px] decoration-4 "}`}  >Tüm Etkinlikler</p></Link>
      
      {
        types.filter((item,index)=>(types.indexOf(item)===index)).map((type)=>(
          <Link key={type}  onClick={()=>{
            handleClick(type)
            setFilterBy(type)
            setCategoryId(type)
          }} href="/">
          <p  className={` cursor-pointer ${type==categoryId && "text-primary font-bold underline underline-offset-[22px] decoration-4 "}`} >{type}</p></Link>
        ))
      } 
     
     </div>
    </div>
  );
};
   
export default Navbar;
