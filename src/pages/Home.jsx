import { Link } from 'wouter'

export default function Home () {
  return (
    <>
      <div>
      Home
      <button className='btn btn-link'>
        <Link to='/reporte'>Reporte de Ventas</Link>
      </button>
      <button className='btn btn-link'>
        <Link to='/venta'>Nueva Venta</Link>
      </button>
      </div>
    </>
  )
}
