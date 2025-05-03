import React from 'react'

const CountCard = ({title, count}:{title: string, count: number}) => {
  return (
    <div className='w-full bg-white p-5 rounded-lg flex flex-col items-start gap-5'>
        <h3 className='text-[#64748B] font-medium text-base'>{title}</h3>
        <h1 className='text-[#1E293B] font-semibold text-[28px]'>{count}</h1>
    </div>
  )
}

export default CountCard