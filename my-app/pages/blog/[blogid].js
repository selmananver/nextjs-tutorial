import React from 'react'
import Head from 'next/head'

function Blog( {title,description}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name ='description' content ={description} />
    </Head>
    <div className='content'> Home
     </div>
    </>
  )
}

export default Blog

export async function getServerSideProps(){
    return{
        props:{
            title: 'Article title',
            description: 'Article description'
        }
}
}

