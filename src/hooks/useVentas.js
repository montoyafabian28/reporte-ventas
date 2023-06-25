import { useMutation, useQuery } from '@tanstack/react-query'
import { getVentas, postVenta } from '../services/reporteVenta'

export function useVentas () {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: () => getVentas(),
    queryKey: ['ventas']
  })

  return {
    ventas: data,
    isVentaLoading: isLoading,
    isVentaError: isError,
    isVentaSuccess: isSuccess
  }
}

export function usePostVentas () {
  const { mutateAsync, isError, isSuccess, isLoading } = useMutation({
    onMutate: async (newVenta) => {
      await new Promise((resolve) => setTimeout(resolve, 500))
    },
    mutationFn: postVenta
  })

  const postNewVenta = async (data) => {
    await mutateAsync(data)
  }

  return {
    postNewVenta,
    isPostVentaLoading: isLoading,
    isPostVentaError: isError,
    isPostVentaSuccess: isSuccess
  }
}
