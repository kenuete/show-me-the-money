import { useEffect, useState } from 'react'
import { BalanceSheet } from './types/Balancesheet'
import Balancesheet from './components/balancesheet/Balancesheet.component'
import { URL } from './config/config'
import { AppContainer } from './App.styles'

const App = () => {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBalanceSheet(data.Reports))
  }, [])
  if (!balanceSheet.length) return <h1>Loading...</h1>

  return (
    <AppContainer>
      <Balancesheet balanceSheet={balanceSheet} />
    </AppContainer>
  )
}

export default App
