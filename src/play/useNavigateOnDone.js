import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const useNavigateOnDone = (timeElapsedMs, totalTime) => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (timeElapsedMs > totalTime) {
      navigate(`/schedule/show/${id}?done`, { replace: true })
    }
  }, [id, timeElapsedMs, totalTime, navigate])
}
