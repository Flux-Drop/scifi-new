import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const AdminCardsHeader = ({title, href}: {title: string, href: string}) => {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    <Link href={href}>
    <Button className="bg-[#F8F8FF] text-[#25388C] font-semibold text-sm hover:bg-[#f8f8f8] cursor-pointer">
      View All
    </Button>
    </Link>
  </div>
  )
}

export default AdminCardsHeader