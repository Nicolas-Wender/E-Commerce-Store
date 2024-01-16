import Link from 'next/link'
import Container from './ui/Container'
import MainNav from './MainNav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './NavbarActions'
import MobileNav from './MobileNav'

export default async function Navbar() {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MobileNav data={categories}/>
          <div className="hidden lg:flex">
            <MainNav data={categories} />
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  )
}
