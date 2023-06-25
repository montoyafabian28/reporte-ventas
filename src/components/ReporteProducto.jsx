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
    <div>
      {reporte.length > 0 && reporte.map((reporte, index) => (
        <div key={index} className='card'>
          <h2>Producto: {reporte.producto}</h2>
          <h2>Cantidad total: {reporte.cantidadTotal}</h2>
          <h2>Precio total: ${reporte.precioTotal}</h2>
        </div>
      ))}
    </div>
  )
}
