import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Redirect = ({ to }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, { replace: true })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return null
}
