import React from 'react'

const User = ({user}) => {
  return (
    <div className='mb-2'>
      <div className="flex space-x-4 px-4 h-16 py-2 duration-200 cursor-pointer hover:bg-slate-700">
        <div className="avatar online">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          {/* <p className='font-bold'>pks</p>
          <span>pks@gmail.com</span> */}
          <p className='font-bold'>{user.fullname}</p>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default User
