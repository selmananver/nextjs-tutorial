import React from 'react'
import { getSession,useSession } from 'next-auth/react'

function Blog({data}) {
  const {data:session} =useSession()
  console.log(session)
  return (
    <div>
      <h1>Blog -{data}</h1>
    </div>
  )
}

export default Blog

export async function getServerSideProps(context){
  const session = await getSession(context)
  if(!session){
    return {
      redirect:{
        destination:`/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent:false
      }
    }
  }
  return {
    props:{
      data:session ? 'List of personalised blogs':'List of blogs'
}
  }
}
