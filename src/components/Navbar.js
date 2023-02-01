import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {amount}=useSelector(store=>store)
 
  return (
    <div style={{height:'100px',width:'100vw',backgroundColor:'slateblue',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <h1>{amount}</h1>
    </div>
  )
}

export default Navbar