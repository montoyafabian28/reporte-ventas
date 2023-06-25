import { useState } from 'react'
import products from '../data/products.json'

export function useProductos () {
  const [productos, updateProductos] = useState(products)

  return {
    productos: productos.productos,
    updateProductos
  }
}
