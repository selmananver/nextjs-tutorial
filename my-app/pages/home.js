import React from 'react'
import  Footer from '../components/Footer'
import Head from 'next/head'

function Home() {
  return (
    <>
    <Head>
      <title>Next Js</title>
      <meta name ='description' content ='Next Js tutorials' />
    </Head>
    <div className='content'> Home
     </div>
    </>
  )
}

export default Home

Home.getLayout = function PageLayout(page) {
return(
    <>
    {page}
    <Footer />
 </>
)
}

