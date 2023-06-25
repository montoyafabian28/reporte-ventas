import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qpooynkgcprgsudzghdo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwb295bmtnY3ByZ3N1ZHpnaGRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzY2MDczOSwiZXhwIjoyMDAzMjM2NzM5fQ.TEr0aMLayC9R7EEG1NZy1NJH1nBI0FGMMXm6SviCFjE'
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getVentas () {
  const { data, error } = await supabase.from('ventas').select('*')

  if (error) {
    throw new Error(error)
  }
  return data
}

export async function postVenta (data) {
  const { data: response, error } = await supabase
    .from('ventas')
    .insert([data])

  if (error) {
    throw new Error(error)
  }
  return response
}

export async function getProductsDetails (name) {
  const { data, error } = await supabase
    .from('ventas')
    .select('*')
    .eq('producto', name)

  if (error) {
    throw new Error(error)
  }
  return data
}
