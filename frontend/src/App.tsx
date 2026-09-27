import './index.css'
import { AddButton } from './components/createHabit/addButton.tsx'
import {HabitCreator} from "./components/createHabit/habitCreator.tsx";
import {useState} from "react";
import {Card} from "./components/habitCard/card.tsx";

function App() {
    const [isCreatorOpen, setIsCreatorOpen] = useState(true);

    return (
    <>
        <section className="flex flex-col items-center min-h-screen gap-4 mx-100 my-4">
            <h1 className="text-3xl font-bold text-primary select-none">Habit Tracker</h1>
                {isCreatorOpen && <HabitCreator onSubmit={() => setIsCreatorOpen(false)}/>}
            <Card title={"PushUps"} description={"At least 10"} color={"#372203"} repeat={1}/>
            <AddButton onClick={() => setIsCreatorOpen(true)}/>
        </section>
    </>
  )
}

export default App
