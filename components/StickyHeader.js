import React, { useState } from 'react'
import { FiFilter } from 'react-icons/fi';
import { AiFillCalendar } from 'react-icons/ai';
import FilterModal from './FilterModal';
import { Badge, Calendar, Modal } from 'antd';
import { useSelector } from 'react-redux';



const StickyHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
    const [dates, setDates] = useState([])
    const handleOk = () => {
      setIsCalendarModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsCalendarModalOpen(false);
    };


  

    const activities=useSelector((state)=>state.activities.activities)
    
 
      
  
  
  
  return (
    <>
    <div className='flex justify-between w-full h-[52px] relative container mx-auto md:px-4 ' >
        <div className='flex items-center font-normal md:text-primary gap-1 cursor-pointer' onClick={()=>setIsModalOpen(!isModalOpen)} >
            <FiFilter/>
            Filtreler
        </div>
        <div className='flex items-center gap-1 cursor-pointer' onClick={()=>setIsCalendarModalOpen(!isCalendarModalOpen)} >
            <AiFillCalendar/>
            Takvimde Göster
        </div>
        {isModalOpen&& <div className='absolute z-30 top-[52px] '><FilterModal /></div> }
        <Modal title="Basic Modal" open={isCalendarModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Calendar cellRender={(date)=>{
         
          activities.map((activity)=>console.log(new Date(activity.date).getDate()))
          if (activities.map((activity)=>new Date(activity.date).getDate())==new Date(date).getDate() ) {
            console.log("ok")
          }
         
        }} />
      </Modal>
    </div>
    </>
  )
}

export default StickyHeader