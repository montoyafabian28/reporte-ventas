import { Link, useLocation } from 'wouter'
import Afk from '../components/AFK'
import { useSessionStore } from '../hooks/useSessionStore'
import { signOut } from '../services/reporteVenta'
import { useEffect } from 'react'

export default function Home () {
  const session = useSessionStore(state => state.session)
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (session == null) {
      setLocation('/login')
    }
  }, [])

  return (
    <>
      <div className='flex items-center fixed top-0 w-full px-5 bg-base-100'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost menu normal-case'>
            <img className='h-16 btn btn-ghost' src='https://valorantinfo.com/images/es/grafiti-sospecha-de-afk_valorant_gif_45247.gif' />
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li><Link to='/reporte'>Reporte de Ventas</Link></li>
            <li> <Link to='/venta'>Nueva Venta</Link></li>
          </ul>
        </div>
        <div className='flex flex-grow-0 items-center'>
          {(session != null) &&
            <button className='btn btn-ghost  menu normal-case' onClick={() => signOut()}>Cerrar Sesión</button>}
        </div>
      </div>
      <Afk />
    </>

  )
}
