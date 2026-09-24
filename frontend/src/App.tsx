import './index.css'
import { AddButton } from './components/createHabit/addButton.tsx'
import {HabitCreator} from "./components/createHabit/habitCreator.tsx";
import {useState} from "react";

function App() {
    const [isCreatorOpen, setIsCreatorOpen] = useState(false);

    return (
    <>
        <section className="flex flex-col items-center min-h-screen gap-4 m-4">
            <h1 className="text-3xl font-bold text-primary select-none">Habit Tracker</h1>
                {isCreatorOpen && <HabitCreator onSubmit={() => setIsCreatorOpen(false)}/>}
            <AddButton onClick={() => setIsCreatorOpen(true)}/>
        </section>
    </>
  )
}

export default App
