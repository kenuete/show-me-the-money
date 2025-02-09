import axios from 'axios'
import dotenv from 'dotenv'
import { BalanceSheet } from '../types/Balancesheet.js'
dotenv.config()

const XERO_API_URL = process.env.XERO_API_URL || 'http://localhost:3000/api.xro/2.0/Reports/BalanceSheet'

/**
 * Fetches the Balance Sheet data from the mock Xero API.
 * @returns {Promise<BalanceSheetData>} The balance sheet data.
 * @throws {Error} If the request fails.
 */

export const getBalanceSheet = async (): Promise<BalanceSheet> => {
  try {
    const response = await axios.get(XERO_API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching balance sheet:', error)
    throw new Error('Failed to fetch balance sheet data')
  }
}
