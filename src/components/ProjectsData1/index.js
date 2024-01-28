import './index.css'

const ProjectsData1 = props => {
  const {data} = props
  const {name, thumbnail, projectLink, username, password} = data
  const user = username === ''
  console.log(user)
  return (
    <li className="li-project1">
      <img src={thumbnail} alt={name} className="img1" />
      <p>{name}</p>
      {user ? (
        ''
      ) : (
        <>
          <p>Username : {username}</p>
          <p>password : {password}</p>
        </>
      )}
      <p>
        App Link :{' '}
        <a href={projectLink} target="blank">
          {projectLink}
        </a>
      </p>
    </li>
  )
}

export default ProjectsData1
