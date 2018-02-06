import React from 'react'

const Card = (props) => {
  const sunglass = props.sunglass
  console.log(sunglass);
  

  return (
    <div className='card'>
      <h2>{sunglass.model}</h2>
      <img className='sunglass-image' src={sunglass.image} alt=""/>
      <p>{sunglass.description}</p>
    </div>
  )
}

export default Card
