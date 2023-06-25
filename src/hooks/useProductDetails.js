import { useQuery } from '@tanstack/react-query'
import { getProductsDetails } from '../services/reporteVenta'

export function useProductDetails ({ name }) {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['productDetails', name],
    queryFn: getProductsDetails,
    enabled: !!name
  })

  return {
    productsDetails: data,
    isProductDetailsLoading: isLoading,
    isProductDetailsError: isError,
    isProductDetailsSuccess: isSuccess
  }
}
