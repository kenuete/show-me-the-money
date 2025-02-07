import { URL } from '../config/config'
import { BalanceSheet } from '../types/Balancesheet'

interface getBalancesheetDataProps {
  onSuccess: (data: BalanceSheet) => void
  onFailure: (error: string) => void
}

export const getBalancesheetData = async ({
  onSuccess,
  onFailure,
}: getBalancesheetDataProps) => {
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    onSuccess(data.Reports)
  } catch (error) {
    if (error instanceof Error) {
      onFailure(error.message)
      console.error(error.message)
    } else {
      onFailure('An unknown error occurred')
    }
  }
}
