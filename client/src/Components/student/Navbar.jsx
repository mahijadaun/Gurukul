import React from 'react'
import { assets } from '../../assets/assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AddContext'
import { useContext } from 'react'
const Navbar = () => {
  const{navigate, isEducator} = useContext(AppContext)
  const location = useLocation()
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={()=> navigate('/')} src={assets.logo} alt='Edemy' className='w-28 lg:w-32 cursor-pointer'/>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {user && <>
            <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
          | <Link to='/my-enrollments' >My Enrollments</Link>
          </>}
        </div>
        {user ? <UserButton/> :
        <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}

      </div>
      {/* For phone Screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
      <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
      {user && <>
        <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
          | <Link to='/my-enrollments' >My Enrollments</Link>
          </>}
        </div>
        {
          user ? <UserButton/> : <button onClick={()=> openSignIn()}
          className='p-1 rounded-full border border-gray-400 hover:border-blue-500 hover:shadow-md transition'
        >
          <img src={assets.user_icon} alt="User" className='w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-full' />
        </button>
        }
      </div>
    </div>
  )
}

export default Navbar