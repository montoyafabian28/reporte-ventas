import { useEffect } from 'react'
import { useSessionStore } from './useSessionStore'
import { useLocation } from 'wouter'

export function useAuth () {
  const session = useSessionStore(state => state.session)
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (session == null) {
      setLocation('/login')
    }
  }, [])
}
