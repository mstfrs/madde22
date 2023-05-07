import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import data from "../utils/activities.json";
import { useDispatch, useSelector } from "react-redux";
import { addFilterPlace, removeFilterPlace } from "../redux/activitiesSlice";

const FilterModal = () => {
  const [isChecked, setIsChecked] = useState([])
  const dispatch=useDispatch()
  const activities=useSelector((state)=>state.activities.filteredActivities)
  const placeFilters=useSelector((state)=>state.activities.filterByPlace)
  // console.log(placeFilters)
  

  
  return (
    <div className="w-[290px]  bg-white py-4 border ">
      <div className=" pl-8">
        <h2 className="text-base font-bold  mt-8 mb-4">Etkinlik Mekanı</h2>
        <div className="flex flex-col gap-4">
          {activities.map((activity) => (
            
            <div key={activity.id}>
              <label className="flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  value={activity.id}
                  // checked={placeFilters.map((place)=>console.log(place))}
                  className="w-5 h-5   text-primary  "
                  onChange={(e,value)=>{
                    e.target.checked? dispatch(addFilterPlace(activity.place)):dispatch(removeFilterPlace(activity.place))
                    setIsChecked(e.target.value)
                    console.log(isChecked)
                  }}
                 
                />
                {activity.place}
              </label>
            </div>
            
          ))}

         
        </div>
      </div>
      <div className=" pl-8">
        <h2 className="text-base font-bold  mt-8 mb-4">Etkinlik Tarihi</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="flex justify-start items-center gap-3">
              <input
                type="checkbox"
                value=""
                className="w-5 h-5   text-primary  "
              />
              Güncel Etkinlikler
            </label>
          </div>
          <div>
            <label className="flex justify-start items-center gap-3">
              <input
                type="checkbox"
                value=""
                className="w-5 h-5   text-primary  "
              />
              Geçmiş Etkinlikler
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
