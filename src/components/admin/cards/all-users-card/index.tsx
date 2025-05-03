import { getUsers } from '@/actions/users'
import AdminCardsHeader from '../admin-cards-header'
import UserListCard from './user-list-card'

const AllUsersCard = async () => {
    const {data: users} = await getUsers();
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 gap-3.5 max-h-[56vh] w-1/2">
      <AdminCardsHeader title='Users' href='/admin/users' />
        <div className='grid grid-cols-2 gap-3 overflow-y-auto'>
            {users?.map((user, index) => (
                <UserListCard firstName={user.firstName} lastName={user.lastName!} email={user.email} key={index} />
            ))}
        </div>
    </div>
  )
}

export default AllUsersCard