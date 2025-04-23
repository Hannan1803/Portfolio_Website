import { useState } from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'
import AboutMe from './components/AboutMe'


function App() {
  
  return (
    <>
      <div class="absolute inset-0 -z-10 h-[100%] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        <NavBar></NavBar>
        <Content></Content>
        <AboutMe></AboutMe>
      </div>
    </>
  )
}

export default App
