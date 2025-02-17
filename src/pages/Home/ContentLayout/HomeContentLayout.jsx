import React from 'react'


export default function HomeContentLayout({children}) {
  return (
        <div className='flex flex-row justify-between gap-10 items-center'>
         {children}
        </div>

    
  )
}
