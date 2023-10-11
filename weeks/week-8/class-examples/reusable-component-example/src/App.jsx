import './App.css'
import { Photo } from './components/Photo'
import { Projects } from './sections/Projects'

const App = () => {
  return (
    <>
      <h1>Frontend Developer</h1>
      <Projects />

      {/* Example of using the Photo component with other props */}
      <Photo
        source="https://images.unsplash.com/photo-1520792532857-293bd046307a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
        color="pink"
        mode="landscape"
      />
    </>
  )
}

export default App
