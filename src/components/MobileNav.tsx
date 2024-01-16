'use client'

import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'

import { Dialog } from '@headlessui/react'
import { AlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import MainNav from './MainNav'
import NavbarActions from './NavbarActions'
import { Category } from '@/types'

interface MainNavProps {
  data: Category[]
}

export default function MobileNav({ data }: MainNavProps) {
  const [open, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(true)
  }
  const onCLose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden ml-auto"
      >
        <AlignJustify />
      </Button>
      <Dialog open={open} onClose={onCLose} as="div" className="z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="ml-auto flex h-screen fixed w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onCLose}></IconButton>
            </div>

            <div className="p-4">
              <MainNav data={data} />
              <NavbarActions />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
