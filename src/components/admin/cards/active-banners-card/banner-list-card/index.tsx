
import { formatDate } from '@/lib/utils'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface IBannerListCard {
title: string
description: string
imageUrl: string
createdAt: Date
}

const BannerListCard = async ({title, createdAt, description, imageUrl}: IBannerListCard) => {
  return (
    <div className='flex items-start gap-3.5 bg-[#F8F8FF] px-4 py-3.5 rounded-lg'>
      <Image src={imageUrl} alt={title} height={60} width={60} className='rounded-lg'/>
      <div className='flex flex-col items-start w-full gap-3.5'>
        <div className='flex flex-col gap-1'>
        <h3 className='text-[#1E293B] font-semibold text-base'>{title}</h3>
        <p className='text-[#64748B] text-sm font-normal text-wrap'>{description}</p>
        </div>
        <hr className='h-px bg-[#64748B] w-full'/>
        <div className='flex gap-3 items-start w-full'>
      <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
      <span className="h-2 w-2 me-1 rounded-full bg-green-800 dark:bg-green-300 inline-block" />
      Active
      </div>
      <div className='flex items-center gap-1'>
        <CalendarDays color='#64748B' strokeWidth={1.5}/>
        <p className='text-[#64748B] text-sm font-normal text-wrap'>{formatDate(createdAt, "long")}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BannerListCard