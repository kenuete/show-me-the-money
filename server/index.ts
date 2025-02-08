// server/src/index.ts
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import balanceSheetRoutes from './routes/balanceSheetRoutes'
import errorHandler from './middlewares/errorHandler'
import { ErrorWithStatusCode } from './utils/ErrorWithStatusCode'

dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT || 5001

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/balance-sheet', balanceSheetRoutes)

// error handler
app.use(errorHandler)

// 404 Not Found
app.use((_req: Request, _res: Response, nextFunction: NextFunction) => {
  const error: ErrorWithStatusCode = new Error('Not Found')
  error.statusCode = 404
  nextFunction(error)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
