import React from 'react'

export default function Heading({text,properties=""}) {
  return (
    <h1 className={`font-bold text-5xl text-center mb-7 ${properties}`}>{text}</h1>
  )
}
