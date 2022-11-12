import Toolbar from './components/Toolbar'
import ProjectList from './components/ProjectList'
import projects from "./projects"
import {useState} from 'react'
import './App.css';


export default function App() {
  const filtres = ["All", "Websites", "Flayers", "Business Cards"]
  const [selected, setSelected] = useState("All")
  const [displayProjects, setProjects] = useState(projects)

  function onSelectFilter(filter) {
    setSelected(filter)
    if (filter === "All") {
      setProjects(projects)
      return
    }
    setProjects(projects.filter(project => project.category === filter))
  }

  return (
    <div className="App">
      <Toolbar filtres={filtres} onSelectFilter={onSelectFilter} selected={selected} />
      <ProjectList projects = {displayProjects}/>
    </div>
  );
}
