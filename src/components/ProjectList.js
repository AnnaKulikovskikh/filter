function ProjectList(props) {
  const display = props.projects.map((project, index) => {
    return (
      <li key={index}>
        <img src={project.img} alt={props.category}/>
      </li>
    )
  })

    return (
      <ul className={"main"}>
        {display}
      </ul>
    )
}
  
export default ProjectList;