import React from 'react'

const UserListCard = ({firstName, lastName, email}: {firstName: string ,lastName: string, email: string}) => {
  return (
    <div className='flex flex-col items-center px-3 py-3.5 gap-3 bg-[#F8F8FF] rounded-lg'>
    <div className='h-12 w-12 border border-[#99AFFF] bg-[#CCD7FF] flex justify-center items-center rounded-full text-[#335FFF] font-semibold text-xl'>{firstName[0]}{lastName && lastName[0]}</div>
<div className='flex flex-col items-center'>
    <h3 className='text-[#1E293B] font-medium text-base'>{firstName} {lastName}</h3>
    <p className='font-normal text-sm text-[#64748B]'>{email}</p>
</div>
    </div>
  )
}

export default UserListCard