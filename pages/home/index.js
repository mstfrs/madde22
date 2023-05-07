import React, { useEffect } from 'react'
import EventCard from '../../components/EventCard'
import data from "../../utils/activities.json"
import { useDispatch, useSelector } from 'react-redux'
import { loadActivities,loadFilteredActivities } from '../../redux/activitiesSlice'

const HomePage = () => {
const activities=useSelector((state)=>state.activities.filteredActivities===[]?state.activities.activities:state.activities.filteredActivities)
const dispatch=useDispatch()

useEffect(() => {
  
  dispatch(loadActivities(data))
  dispatch(loadFilteredActivities(data))

  
}, [])

  return (
    <>
    {
        activities.map((activity)=>(
            <div key={activity.id}>
           
            <EventCard activity={activity} /></div>
            
        ))
    }
        
    </>
  )
}

export default HomePage