import React from 'react'

export default function Button({className,text}) {
  return (
   <button className={`rounded-sm ${className} cursor-pointer`}>{text}</button>
  )
}
