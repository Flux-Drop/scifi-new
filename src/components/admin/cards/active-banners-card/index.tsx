import { Button } from '@/components/ui/button'
import React from 'react'
import BannerListCard from './banner-list-card'
import { getActiveBanners } from '@/actions/banner'
import Link from 'next/link'
import AdminCardsHeader from '../admin-cards-header'

const ActiveBannersCard = async () => {
    const {data: activeBanners} = await getActiveBanners();
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 gap-3.5 max-h-[56vh] w-1/2">
      <AdminCardsHeader title='Active Banners' href='/admin/banner' />
        <div className='flex flex-col gap-3 overflow-y-auto'>
            {activeBanners?.map((activeBanner) => (
                <BannerListCard title={activeBanner.title} description={activeBanner.description} imageUrl={activeBanner.imageUrl} createdAt={activeBanner.createdAt} key={activeBanner.id} />
            ))}
        </div>
    </div>
  )
}

export default ActiveBannersCard