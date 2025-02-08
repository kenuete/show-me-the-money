import axios from 'axios'
import { getBalanceSheet } from './balanceSheetService'
import { BalanceSheet } from '../types/Balancesheet'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Balance Sheet Service', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should return balance sheet data when axios succeeds', async () => {
        const mockBalanceSheet: BalanceSheet = {
            Reports: [],
            Status: 'OK',
        }
        mockedAxios.get.mockResolvedValueOnce({ data: mockBalanceSheet })

        const result = await getBalanceSheet()
        expect(result).toEqual(mockBalanceSheet)
        expect(axios.get).toHaveBeenCalled()
    })

    it('should throw an error when axios fails', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'))

        await expect(getBalanceSheet()).rejects.toThrow('Failed to fetch balance sheet data')
        expect(axios.get).toHaveBeenCalled()
    })
})