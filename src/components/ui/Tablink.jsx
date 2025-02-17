import React from 'react'
import { Link } from 'react-router-dom'

export default function Tablink({text,path}) {
  return (
   <Link to={path} className=' font-normal'>
{text}
   </Link>
  )
}
