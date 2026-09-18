import { Card } from './components/card.tsx'
import './index.css'

function App() {

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Card title="My Card" description="This is a simple card component." color="var(--color-primary)" repeat={1} />
      </section>
    </>
  )
}

export default App
