// server/middleware/errorHandler.ts

import { Request, Response, NextFunction } from 'express'
import { ErrorWithStatusCode } from '../utils/ErrorWithStatusCode'

function errorHandler(
  err: ErrorWithStatusCode, 
  _req: Request, 
  res: Response, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _nextFunction: NextFunction
) {
  console.error(err)  // Log the error

  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  })
}

export default errorHandler