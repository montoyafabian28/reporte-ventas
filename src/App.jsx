import { Route, useLocation } from 'wouter'
import { lazy, Suspense, useEffect } from 'react'
import { supabase } from './services/reporteVenta'
import Footer from './components/Footer'
import { useSessionStore } from './hooks/useSessionStore'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const FormVenta = lazy(() => import('./pages/FormVenta'))
const ReporteVenta = lazy(() => import('./pages/ReporteVenta'))

function App () {
  const [, setLocation] = useLocation()
  const setSession = useSessionStore(state => state.setSession)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log({ event, session })
      setSession(session)
      if (!session) {
        setLocation('/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <Suspense>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/venta' component={FormVenta} />
      <Route path='/reporte' component={ReporteVenta} />

      <Footer />
    </Suspense>
  )
}

export default App
