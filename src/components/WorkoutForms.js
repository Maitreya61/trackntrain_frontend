import { useState } from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'


function WorkoutForm() {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const workout = {title, load, reps}

        const response = await fetch('https://trackntrain-backend.vercel.app/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            console.log('New Workout Added', json)
            dispatch({type:'CREATE_WORKOUTS', payload:json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />

            <label>Load (kg)</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                required
            />
            <label>Reps</label>
            <input
                type="number"
                onChange={(e)=> setReps(e.target.value)}
                value={reps}
                required
            />

            <button>Add Workout</button>
        </form>
    );
}

export default WorkoutForm;