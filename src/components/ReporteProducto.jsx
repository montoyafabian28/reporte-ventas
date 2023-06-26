import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { getProductsDetails } from '../services/reporteVenta'

export function ReporteProducto ({ name }) {
  const [productDetails, setProductDetails] = useState(null)
  const [reporte, setReporte] = useState([])

  useEffect(() => {
    getProductsDetails(name).then(data => setProductDetails(data))
  }, [])

  useEffect(() => {
    if (productDetails == null) return
    const { producto } = productDetails[0]
    const precioTotal = productDetails.reduce((acc, curr) => {
      return acc + curr.precio_total
    }, 0)
    const cantidadTotal = productDetails.reduce((acc, curr) => {
      return acc + curr.cantidad
    }, 0)
    const newReporte = { producto, precioTotal: precioTotal.toFixed(2), cantidadTotal }
    setReporte(prev => [...prev, newReporte])
  }, [productDetails])

  return (
    <div className='mt-3'>
      {reporte.length > 0 && reporte.map((reporte, index) => (
        <div key={index} className='card'>
          <div className="stats stats-vertical lg:stats-horizontal bg-base-300 shadow">

            <div className="stat">
              <div className="stat-title py-5 text-center text-sm">{reporte.producto}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Cantidad Total</div>
              <div className="stat-value text-sm">{reporte.cantidadTotal}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Vendido</div>
              <div className="stat-value text-sm">${reporte.precioTotal}</div>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}
