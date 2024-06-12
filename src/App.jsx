import Nav from './components/Nav'
import Section1 from './components/Sections/Section1'
import Section2 from './components/Sections/Section2'
import Section3 from './components/Sections/Section3'
import Section4 from './components/Sections/Section4'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Section1/> {/*Introduction*/}
      <Section2/> {/*Portfolio*/}
      <Section3/> {/*My journey*/}
      <Section4/> {/*Skills*/}
      <Footer/>
    </>
  )
}

export default App
