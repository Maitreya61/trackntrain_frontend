import React from 'react'
import {useEffect} from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'
import axios from 'axios'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForms'


const Home = () => {

    const {workouts, dispatch} = useWorkoutContext();    

    useEffect(()=>{
       axios.get("/workouts")
        .then((res) => dispatch({type:'SET_WORKOUTS', payload: res.data}))
    },[dispatch])


    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>{
                    return(
                        <WorkoutDetails key={workout._id} workout={workout}/>
                    )
                })}
            </div>
            <WorkoutForm/>
        </div>
     );
}

export default Home;