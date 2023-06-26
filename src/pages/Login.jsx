import { Hero } from '../components/Hero'
import { Link } from 'wouter'

export default function Login () {
  return (
    <>
    <div className="navbar bg-base-100">
    <div className="flex-1" >
    <Link to="/" className="btn btn-ghost normal-case text-xl">
      <img className='h-16' src='https://valorantinfo.com/images/es/grafiti-sospecha-de-afk_valorant_gif_45247.gif'/>
    </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to='/reporte'>Reporte de Ventas</Link></li>
        <li> <Link to='/venta'>Nueva Venta</Link></li>
        </ul>
      </div>
    </div>

   <Hero/>

    </>
  )
}
