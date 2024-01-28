import './index.css'

const CertificatesData = props => {
  const {data} = props
  const {imageUrl, name, link} = data
  return (
    <li className="li-data-ce">
      {' '}
      <a href={link} target="blank">
        <img src={imageUrl} alt={name} className="image" />
        <p>{name}</p>
      </a>{' '}
    </li>
  )
}

export default CertificatesData
