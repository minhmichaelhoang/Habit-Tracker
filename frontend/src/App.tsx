import './index.css'
import { AddButton } from './components/createHabit/addButton.tsx'
import {HabitCreator} from './components/createHabit/habitCreator.tsx';
import {useEffect, useState} from 'react';
import {Card} from './components/habitCard/card.tsx';
import type {Habit} from './domain/Habit.ts';
import { fetchHabits } from './api.ts'

function App() {
    const [isCreatorOpen, setIsCreatorOpen] = useState(true);
    const [habits, setHabits] = useState<Habit[]>([]);

    useEffect(() => {
        fetchHabits().then(setHabits).catch(console.error).catch(console.error);
    }, [])

    function handleCreated(habit: Habit) {
        setHabits([...habits, habit]);
        setIsCreatorOpen(false);
    }

    return (
    <>
        <section className="flex flex-col items-center min-h-screen gap-4 mx-100 my-4">
            <h1 className="text-3xl font-bold text-primary select-none">Habit Tracker</h1>
            <ul className="">{
                habits.map((habit) => (
                    <li key={habit.id}><Card
                        title={habit.title}
                        description={habit.description}
                        color={habit.color}
                        repeat={habit.repeat}
                    /></li>
                ))
            }</ul>
            {isCreatorOpen && <HabitCreator onCreated={handleCreated}/>}
            <Card title={"PushUps"} description={"At least 10"} color={"#372203"} repeat={1}/>
            <AddButton onClick={() => setIsCreatorOpen(true)}/>
        </section>
    </>
  )
}

export default App
