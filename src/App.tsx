import { useCallback, useEffect, useState } from 'react'
import { BalanceSheet } from './types/Balancesheet'
import Balancesheet from './components/balancesheet/Balancesheet.component'
import { AppContainer } from './App.styles'
import { getBalancesheetData } from './fetch'
import { ClimbingBoxLoader } from 'react-spinners'
import Box from './components/box/Box.component'
import Swal from 'react-sweetalert2'

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

  if (loading)
    return (
      <Box>
        <ClimbingBoxLoader aria-label='Loading Spinner' data-testid='loader' />
      </Box>
    )

  if (error)
    return (
      <Swal
        show={true}
        icon='error'
        title='Oops...'
        text='Something went wrong!'
        confirmButtonText='Reload'
        onConfirm={() => {
          window.location.reload()
        }}
      />
    )

  return (
    <AppContainer>
      <Balancesheet balanceSheet={balanceSheet} />
    </AppContainer>
  )
}

export default App
