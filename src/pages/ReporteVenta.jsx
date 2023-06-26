import { useEffect, useState } from 'react'
import { ReporteProducto } from '../components/ReporteProducto'
import { useVentas } from '../hooks/useVentas'
import { getRidOfRepeated } from '../utilities/filters'
import { Link } from 'wouter'

export default function ReporteVenta () {
  const {
    ventas,
    isVentaError,
    isVentaLoading,
    isVentaSuccess
  } = useVentas()
  const [ventasUniq, setVentasUniq] = useState([])

  useEffect(() => {
    if (ventas == null) return
    setVentasUniq(getRidOfRepeated(ventas, 'producto'))
  }, [ventas])

  return (
    <>
      {/* Navbar champu */}
    <div className="navbar bg-base-100">
      <div className="flex-1" >
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img className='h-16' src='https://valorantinfo.com/images/es/grafiti-sospecha-de-afk_valorant_gif_45247.gif'/>
      </Link>
     </div>
     <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          <li> <Link to='/venta'>Nueva Venta</Link></li>

          </ul>
        </div>
      </div>
      <div className='container mx-auto w-full '>
        <h2 className='uppercase h2 font-bold text-3xl text-center my-3'>Ventas Realizadas</h2>
        <div className='flex flex-wrap gap-3 justify-center text-white'>
          {isVentaLoading && <span className="loading loading-bars loading-lg"></span>}
          {isVentaSuccess && (ventas != null) && ventas.map((venta) => (
            <div className="card bg-base-100 my-3 w-96 shadow-2xl  rounded-lg" key={venta.id}>
              <div className="card-body">
                <h2 className="card-title text-secondary font-bold">{venta.producto}</h2>
                <div className='divider text-gray-600'>Información del Producto</div>
                <p>Precio: <span className='text-gray-300'>{venta.precio_unitario}</span></p>
                <p>Cantidad: <span className='text-gray-300'>{venta.cantidad}</span></p>
                <p>Precio Total: <span className='text-gray-300'>{venta.precio_total}</span></p>
                <p>Vendedor: <span className='text-gray-300'>{venta.vendedor}</span></p>
                <p>Cliente: <span className='text-gray-300'>{venta.cliente}</span></p>
                <p>Fecha: <span className='text-gray-300'>{venta.fecha}</span></p>
              </div>
            </div>
          ))}
          {isVentaError && (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>
          )}
        </div>
        <h2 className='uppercase h2 font-bold text-3xl text-center my-3'>Reporte De ventas</h2>

        <div className='flex flex-wrap gap-3 justify-center text-white'>
          {isVentaSuccess && (ventas != null) && ventasUniq.map((venta) => (
           <div key={venta.id}>
            <ReporteProducto name={venta.producto} />
           </div>
          ))}
        </div>
      </div>
    </>
  )
}
