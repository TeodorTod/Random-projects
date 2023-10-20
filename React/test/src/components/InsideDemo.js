import React, { useContext } from 'react'
import { Context } from '../context'

const InsideDemo = () => {
  const value = useContext(Context)
  return (
    <h1>{value}</h1>
  )
}

export default InsideDemo