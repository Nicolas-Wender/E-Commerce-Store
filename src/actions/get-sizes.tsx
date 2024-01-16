import { Size } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

export default async function getSizes(): Promise<Size[]> {
  const requestOptions = {
    method: 'GET'
  }

  const response = await fetch(URL, requestOptions)
  return response.json()
}
