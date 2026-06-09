import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const port = Number(process.env.PORT) || 3001

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
