 
import express, { Request, Response, NextFunction } from 'express'
import request from 'supertest'
import router from './balanceSheetRoutes'
import { getBalanceSheet } from '../services/balanceSheetService'
import {ErrorWithStatusCode} from '../utils/ErrorWithStatusCode'
jest.mock('../services/balanceSheetService')

const app = express()
app.use(express.json())
app.use('/api/balance-sheet', router)

// Error handling middleware for testing purposes
// the last argument is required to make this an error handling middleware
/* eslint-disable @typescript-eslint/no-unused-vars */
app.use((err: ErrorWithStatusCode, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ error: err.message })
})

describe('get(/api/balance-sheet)', () => {
    // beforeAll(() => {
    //     jest.useFakeTimers()  // Mock timers to prevent `setImmediate` issues
    //   })
    it('should return balance sheet response', async () => {
        const fakeData = { totalAssets: 1000, totalLiabilities: 500 }
        ;(getBalanceSheet as jest.Mock).mockResolvedValue(fakeData)

        const response = await request(app).get('/api/balance-sheet')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(fakeData)
    })

    it('should handle errors thrown by getBalanceSheet', async () => {
        const errorMessage = 'Error retrieving balance sheet'
        ;(getBalanceSheet as jest.Mock).mockRejectedValue(new Error(errorMessage))

        const response = await request(app).get('/api/balance-sheet')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ error: errorMessage })
    })
})