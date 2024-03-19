import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/Navbar'
import "../components/Navbar.css"
import { ThemeProvider } from "styled-components"
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import '../styles/layout.css'
import Head from 'next/head'
const theme ={
  colors:{
    primary:'#355C7D'
  }
}

export default function App({ Component, pageProps }) {
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  <ThemeProvider theme={theme}>
  <>
  <Head>
    <title>Next Js</title>
    <meta name ='description' content ='Next Js tutorials' />
  </Head>
  {/* <Header /> */}
  <Navbar />
  <Component {...pageProps} />;
  <Footer/>
  </>
  </ThemeProvider>

  )
}
