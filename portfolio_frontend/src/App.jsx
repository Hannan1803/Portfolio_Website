import NavBar from './components/NavBar'
import Content from './components/Content'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="site-shell">
      <div className="site-frame">
        <NavBar />
        <main>
          <Content />
          <AboutMe />
        </main>
      </div>
    </div>
  )
}

export default App
