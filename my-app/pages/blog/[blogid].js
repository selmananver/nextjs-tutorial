import React from 'react'
import Head from 'next/head'

function Blog( {title,description}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name ='description' content ={description} />
    </Head>
    <h1 className='content'> Home
    Env nalytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
     </h1>
    </>
  )
}

export default Blog

export async function getServerSideProps(){
  const user =process.env.DB_USER
  const password = process.env.DB_PASSWORD
  // console.log(`Connecting to database ${user} and password ${password}`)
    return{
        props:{
            title: 'Article title',
            description: 'Article description'
        }
}
}

