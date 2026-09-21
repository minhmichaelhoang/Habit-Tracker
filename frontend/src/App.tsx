import { Card } from './Components/card.tsx'
import './index.css'
import { AddButton } from './Components/addButton.tsx'

function App() {

  return (
    <>
      <section className="flex flex-col items-center min-h-screen gap-4 m-4">
        <h1 className="text-3xl font-bold text-primary select-none">Habit Tracker</h1>
        <AddButton/>
      </section>
    </>
  )
}

export default App
