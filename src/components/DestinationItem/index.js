import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {imgUrl, name} = item
  return (
    <li className="box">
      <img src={imgUrl} className="box-img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
