import './card.css'

function Card() { 
  return (
    <div className='card'>
      <img src="./bmw.webp" alt="logo" />
      <h3>{props.ism}</h3>
      <p>{props.kasbi}</p>
      <p>{props.soha}</p>
    </div>
  )
}

export default Card
