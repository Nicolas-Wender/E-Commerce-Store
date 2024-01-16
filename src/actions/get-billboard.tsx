import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export default async function getBillboards(id: string): Promise<Billboard> {
  const requestOptions = {
    method: 'GET'
  }

  const response = await fetch(`${URL}/${id}`, requestOptions)
  return response.json()
}
