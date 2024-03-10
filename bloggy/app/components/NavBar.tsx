import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
        <div className='flex justify-between items-center h-16 w-full'>
            <Link href={'/'}>
                <div>Bloggy</div>
            </Link>
            <div>Theme</div>
        </div>
    </div>
  )
}

export default NavBar