import React from 'react'
import {useEffect} from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'


import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForms'


const Home = () => {

    const {workouts, dispatch} = useWorkoutContext()   


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://trackntrain-backend.vercel.app/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])


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