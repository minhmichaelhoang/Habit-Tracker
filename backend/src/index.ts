import express from 'express'

type Habit = {
  id: number
  name: string
  createdAt: string
}

const app = express()
const port = Number(process.env.PORT ?? 3000)

app.use(express.json())

// In-memory storage: all data is lost when the server restarts
const habits: Habit[] = []
let nextId = 1

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/habits', (_req, res) => {
  res.json(habits)
})

app.post('/api/habits', (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : ''
  if (!name) {
    res.status(400).json({ error: 'name is required' })
    return
  }

  const habit: Habit = { id: nextId++, name, createdAt: new Date().toISOString() }
  habits.push(habit)
  res.status(201).json(habit)
})

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
