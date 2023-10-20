import React from 'react'
import { useContext } from 'react'
import { Context } from '../context'

const Outside = () => {
    const value = useContext(Context);
  return (
    <div>{value}</div>
  )
}

export default Outside