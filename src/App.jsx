import { Route } from 'wouter'
import { lazy, Suspense } from 'react'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const FormVenta = lazy(() => import('./pages/FormVenta'))
const ReporteVenta = lazy(() => import('./pages/ReporteVenta'))

function App () {
  return (
    <Suspense>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/venta' component={FormVenta} />
      <Route path='/reporte' component={ReporteVenta} />
      <Footer/>
    </Suspense>
  )
}

export default App
