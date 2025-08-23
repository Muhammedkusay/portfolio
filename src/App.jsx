import { Route, Routes } from "react-router-dom"
import ProjectsPage from "./components/ProjectsPage"
import Home from "./components/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
