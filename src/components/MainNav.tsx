'use client'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MainNavProps {
  data: Category[]
}

export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname()

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className="lg:mx-6 lg:mt-0 mt-6 flex flex-col lg:flex-row items-center lg:space-x-6">
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'lg:text-sm text-xl font-medium mb-8 lg:mb-0 transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
