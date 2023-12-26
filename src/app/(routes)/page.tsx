import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import BillBoard from '@/components/BillBoard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'

export default async function Home() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('707432ef-d96f-46de-9d99-786cae80c769')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
