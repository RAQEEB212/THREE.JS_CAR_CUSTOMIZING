import React from 'react'

export default function Wrapper({children,properties=""}) {
  return (
    <section className={`px-20 mb-10 ${properties}`}>
        {children}
    </section>
  )
}
