import { useState } from 'react'
import Nav from './components/Nav'
import Section1 from './components/Sections/Section1'
import Section2 from './components/Sections/Section2'
import Section3 from './components/Sections/Section3'
import Section4 from './components/Sections/Section4'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  )
}

export default App
