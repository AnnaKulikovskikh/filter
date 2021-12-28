function ProjectList(props) {
  const projects = props.list;
    return (
      <ul classNmae={"main"}> 
        {projects.map((item) => {
          return <li className={"list"} key={item.id}><img className="imgPortfolio" src={item.img} alt={item.category}/></li>
        }) 
        }  
      </ul>
    )
}
  
export default ProjectList;