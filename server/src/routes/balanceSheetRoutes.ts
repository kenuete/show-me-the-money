import express, { Request, Response, NextFunction } from 'express'
import { getBalanceSheet } from '../services/balanceSheetService'

const router = express.Router()

// GET /api/balance-sheet
router.get('/', async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getBalanceSheet()
    res.json(data)
  } catch (error) {
    next(error)
  }
})

export default router
