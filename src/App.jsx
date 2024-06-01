import { useState } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import FeatureSection from './components/FeatureSection/FeatureSection'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
// import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <FeatureSection/>
    <Blogs/>
    <Footer/>

    </>
  )
}

export default App
