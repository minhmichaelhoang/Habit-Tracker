import express from 'express'

type Habit = {
  title: string;
  description: string;
  repeat: number;
  color: string;
  id: number;
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
  const title = typeof req.body?.title === 'string' ? req.body.title.trim() : ''
  if (!title) {
    res.status(400).json({ error: 'title is required' })
    return
  }

  const habit: Habit = {color: "", description: "", repeat: 0, id:  nextId++, title}
  habits.push(habit)
  res.status(201).json(habit)
})

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
