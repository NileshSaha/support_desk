import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

export const useAuthStatus = () => {
  const [authStatus, setAuthStatus] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const {user} = useSelector(state => state.auth)

  useEffect(() => {
    if (user) {
      setAuthStatus(true)
    } else {
      setAuthStatus(false)
    }
    setCheckingStatus(false)
  }, [user])

  return {authStatus, checkingStatus}
}