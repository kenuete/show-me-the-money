import { getBalancesheetData } from './index'

describe('getBalancesheetData', () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should call onSuccess with data.Reports when fetch returns an ok response', async () => {
        const mockData = { Reports: { some: 'data' } };
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => mockData,
        })
        const onSuccess = jest.fn()
        const onFailure = jest.fn()

        await getBalancesheetData({ onSuccess, onFailure })

        expect(onSuccess).toHaveBeenCalledWith(mockData.Reports)
        expect(onFailure).not.toHaveBeenCalled()
    })

    it('should call onFailure with error message when fetch returns a non-ok response', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 404,
        })
        const onSuccess = jest.fn()
        const onFailure = jest.fn()

        await getBalancesheetData({ onSuccess, onFailure })

        expect(onFailure).toHaveBeenCalledWith('Response status: 404')
        expect(onSuccess).not.toHaveBeenCalled()
    })

    it('should call onFailure with error.message when fetch throws an Error instance', async () => {
        (global.fetch as jest.Mock).mockRejectedValue(new Error('Fetch error'))
        const onSuccess = jest.fn()
        const onFailure = jest.fn()

        await getBalancesheetData({ onSuccess, onFailure })

        expect(onFailure).toHaveBeenCalledWith('Fetch error')
        expect(onSuccess).not.toHaveBeenCalled()
    })

    it('should call onFailure with a generic message when error is not an instance of Error', async () => {
        (global.fetch as jest.Mock).mockRejectedValue('Non-Error')
        const onSuccess = jest.fn()
        const onFailure = jest.fn()

        await getBalancesheetData({ onSuccess, onFailure })

        expect(onFailure).toHaveBeenCalledWith('An unknown error occurred')
        expect(onSuccess).not.toHaveBeenCalled()
    })
})