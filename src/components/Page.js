import React, {  } from 'react'
import { useDispatch } from 'react-redux'
import { withdrawMoney, depositeMoney } from '../state/actionCreatores'
const Page = () => {

  
  const dispatch= useDispatch()

  return (
    <div style={{height:'300px',width:'100vw',backgroundColor:'slategrey',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <button style={{fontSize:'50px', width:'100px',borderRadius:'100px',cursor:'pointer',backgroundColor:'slateblue'}}
       onClick={()=>{
        dispatch(withdrawMoney(50))
      }}>-</button>
     <h1 style={{margin:'10px'}}>  Account Balance </h1>
      <button style={{fontSize:'50px', width:'100px',borderRadius:'100px',cursor:'pointer',backgroundColor:'slateblue'}}  onClick={()=>{
      dispatch(depositeMoney(50))
    }}>+</button>
    </div>
  )
}

export default Page