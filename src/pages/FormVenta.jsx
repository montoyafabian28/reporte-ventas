import { useState, useEffect } from 'react'
import { useProductos } from '../hooks/useProductos'
import { usePostVentas } from '../hooks/useVentas'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FormVenta () {
  const {
    isPostVentaError,
    isPostVentaLoading,
    isPostVentaSuccess,
    postNewVenta
  } = usePostVentas()
  const { productos } = useProductos()
  const [productSelected, setProductSelected] = useState(null)
  const [cantidad, setCantidad] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formdata = new FormData(e.target)

    const isValidCount = cantidad > 0

    if (!isValidCount) {
      toast.warning('La cantidad debe ser mayor a 0', { theme: 'dark' })
      return
    }
    const isValidProduct = productSelected != null

    if (!isValidProduct) {
      toast.warning('Debe seleccionar un producto', { theme: 'dark' })
      return
    }

    const venta = {
      fecha: new Date(),
      producto: productSelected.nombre,
      cantidad,
      cliente: formdata.get('cliente'),
      vendedor: formdata.get('vendedor'),
      precio_total: precioTotal,
      precio_unitario: productSelected.precio
    }
    try {
      await postNewVenta(venta)
    } catch (error) {
      toast.error('Error al guardar la venta', { theme: 'dark' })
    } finally {
      form.reset()
    }
  }

  const handleOnChange = (e) => {
    const productoId = Number(e.target.value)
    const producto = productos.find((producto) => producto.id === productoId)
    if (producto == null) return
    setProductSelected(producto)
  }

  const makeToast = (type) => {
    switch (type) {
      case 'success':
        toast.success('Venta guardada', { theme: 'dark' })
        break
      case 'error':
        toast.error('Error al guardar la venta', { theme: 'dark' })
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (productSelected == null) return
    const precio = productSelected.precio
    const total = precio * cantidad
    setPrecioTotal(total)
  }, [cantidad, productSelected])

  return (
    <>
    {(!isPostVentaError && !isPostVentaLoading && isPostVentaSuccess) && makeToast('success')}
    {isPostVentaError && makeToast('error')}
    <form className='' onSubmit={(e) => handleSubmit(e)}>
        <div className='container'>
          <label className='block' htmlFor='nombre'>Producto</label>
          <select defaultValue='' name='producto' id='nombre' onChange={(e) => handleOnChange(e)}>
            <option value='' disabled>Seleccione un producto</option>
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>{producto.nombre}</option>
            ))}
          </select>
          <div>
            <label className='block' htmlFor='cantidad'>Cantidad</label>
            <input value={cantidad} min={0} onChange={(e) => setCantidad(e.target.value)} required type='number' id='cantidad'/>
          </div>
          <div>
            <label className='block' htmlFor='cliente'>Cliente</label>
            <input required name='cliente' type='text' id='cliente'/>
          </div>
          <div>
            <label className='block' htmlFor='vendedor'>Vendedor</label>
            <input required name='vendedor' type='text' id='vendedor'/>
          </div>
          {(productSelected != null) && (
            <div className='text-white'>
              ${productSelected.precio}
            </div>
          )}
          {(precioTotal != null) && (
            <div className='text-white'>
              Precio total: ${precioTotal.toFixed(2)}
            </div>
          )}
        </div>
        {isPostVentaLoading && (<span className="loading loading-spinner text-secondary block"></span>)}
        <button className='btn btn-primary' type='submit'>Guardar</button>
    </form>
    <ToastContainer />
    </>
  )
}
