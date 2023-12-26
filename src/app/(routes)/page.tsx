import getBillboard from '@/actions/get-billboard'
import BillBoard from '@/components/BillBoard'
import Container from '@/components/ui/Container'

export default async function Home() {
  const billboard = await getBillboard('707432ef-d96f-46de-9d99-786cae80c769')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboard} />
      </div>
    </Container>
  )
}
