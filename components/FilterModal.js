import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addFilterPlace, removeFilterPlace } from "../redux/activitiesSlice";

const FilterModal = () => {
  const dispatch = useDispatch();

  const places = useSelector((state) =>
    state.activities.filteredActivities.map((item) => item.place)
  );
  const filteredPlaces = useSelector((state) => state.activities.filterByPlace);

  console.log(filteredPlaces);

  return (
    <div className="w-[290px]  bg-white py-4 border ">
      <div className=" pl-8">
        <h2 className="text-base font-bold  mt-8 mb-4">Etkinlik Mekanı</h2>
        <div className="flex flex-col gap-4">
          {places
            .filter((item, index) => places.indexOf(item) === index)
            .map((place) => (
              <label
                key={place.index}
                className="flex justify-start items-center gap-3"
              >
                <input
                  type="checkbox"
                  value={place.id}
                  // checked={console.log(filteredPlaces.map((plc)=>place===plc))}
                  className="w-5 h-5   text-primary  "
                  onChange={(e, value) => {
                    e.target.checked
                      ? dispatch(addFilterPlace(place))
                      : dispatch(removeFilterPlace(place));

                    {
                      console.log(filteredPlaces.map((plc) => place === plc));
                    }
                  }}
                />
                {place}
              </label>
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
