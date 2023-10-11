import { Project } from '../components/Project'
import projects from '../projects.json'

//Example fetch
fetch("https://api.github.com/users/HIPPIEKICK/repos")
  .then((res) => res.json())
  .then((json) => console.log(json))

export const Projects = () => {
  return projects.projects.map((project) => {
    return (
      <Project
        key={project.name}
        name={project.name}
        photo={project.image}
        tags={project.tags} />
    )
  })
}
