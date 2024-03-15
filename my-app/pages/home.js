import React from 'react'
import  Footer from '../components/Footer'
import Head from 'next/head'

function Home() {
  return (
    <div className='content'> Home
      
    </div>
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

