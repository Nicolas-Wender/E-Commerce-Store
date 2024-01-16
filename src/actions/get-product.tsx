import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export default async function getProduct(id: string): Promise<Product> {
  const requestOptions = {
    method: 'GET'
  }

  const response = await fetch(`${URL}/${id}`, requestOptions)
  return response.json()
}
