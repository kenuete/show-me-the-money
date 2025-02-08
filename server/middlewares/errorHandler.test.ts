import { Request, Response } from 'express'
import errorHandler from './errorHandler'
import { ErrorWithStatusCode } from '../utils/ErrorWithStatusCode'

describe('errorHandler middleware', () => {
    let req: Partial<Request>
    let res: Partial<Response>
    let statusMock: jest.Mock
    let jsonMock: jest.Mock

    beforeEach(() => {
        req = {}
        jsonMock = jest.fn()
        statusMock = jest.fn().mockReturnValue({ json: jsonMock })
        res = { status: statusMock }
        process.env.NODE_ENV = 'test'
    })

    afterEach(() => {
        jest.clearAllMocks()
        delete process.env.NODE_ENV
    })

    test('should respond with with error status code and error message without stack in non-development environment', () => {
        const error = new Error('Test Error') as ErrorWithStatusCode
        error.statusCode = 400
        error.stack = 'Error stack trace'
        
        errorHandler(error, req as Request, res as Response, () => {})
        
        expect(statusMock).toHaveBeenCalledWith(400)
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            message: 'Test Error',
            stack: undefined,
        })
    })

    test('should respond with 500 status code and default message when error has no statusCode or message', () => {
        const error = new Error() as ErrorWithStatusCode
        error.message = ''
        
        errorHandler(error, req as Request, res as Response, () => {})
        
        expect(statusMock).toHaveBeenCalledWith(500)
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            message: 'Internal Server Error',
            stack: undefined,
        })
    })

    test('should include error stack in development environment', () => {
        process.env.NODE_ENV = 'development'
        const error = new Error('Development Error') as ErrorWithStatusCode
        error.statusCode = 422
        error.stack = 'Development error stack trace'
        
        errorHandler(error, req as Request, res as Response, () => {})
        
        expect(statusMock).toHaveBeenCalledWith(422)
        expect(jsonMock).toHaveBeenCalledWith({
            success: false,
            message: 'Development Error',
            stack: 'Development error stack trace',
        })
    })
})