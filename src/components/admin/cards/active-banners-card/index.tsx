import { getActiveBanners } from '@/actions/banner'
import AdminCardsHeader from '../admin-cards-header'
import BannerListCard from './banner-list-card'

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