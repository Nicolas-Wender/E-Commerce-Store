import { Color } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

export default async function getColors(): Promise<Color[]> {
  const requestOptions = {
    method: 'GET'
  }

  const response = await fetch(URL, requestOptions)
  return response.json()
}
