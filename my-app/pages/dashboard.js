import React from 'react'
import { useEffect,useState } from 'react'
import {getSession,signIn} from 'next-auth/react'
function Dashboard() {
  const [loading,setloading] =useState(true)
  useEffect(()=>{
    const securePage = async()=>{
    const session = await getSession()
    if(!session){
      signIn()
    }
    else{
      setloading(false)
    }
  }
  securePage()
  },[])
  if(loading){
    return <h1>Loading ...</h1>
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
