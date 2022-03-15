import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectScheduleById } from '../schedule/index.js'

export const useNavigateOnMissingSchedule = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const schedule = useSelector(state => selectScheduleById(id)(state))

  useEffect(() => {
    if (!schedule) {
      navigate(`/schedule/show/${id}`, { replace: true })
    }
  }, [id, schedule, navigate])
}
