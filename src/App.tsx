import { useCallback, useEffect, useState } from 'react'
import { BalanceSheet } from './types/Balancesheet'
import Balancesheet from './components/balancesheet/Balancesheet.component'
import { AppContainer } from './App.styles'
import { getBalancesheetData } from './fetch'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>([])

  const onSuccess = useCallback((data: BalanceSheet) => {
    setBalanceSheet(data)
    setLoading(false)
  }, [])

  const onFailure = useCallback((error: string) => {
    setError(error)
    setLoading(false)
  }, [])

  useEffect(() => {
    getBalancesheetData({ onSuccess, onFailure })
  }, [onSuccess, onFailure])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <AppContainer>
      <Balancesheet balanceSheet={balanceSheet} />
    </AppContainer>
  )
}

export default App
