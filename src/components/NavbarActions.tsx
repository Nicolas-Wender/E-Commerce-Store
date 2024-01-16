'use client'

import { ShoppingBag } from 'lucide-react'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4 lg:mt-0 mt-6">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black lg:px-4 lg:py-2 px-8 py-4 mx-auto"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}
