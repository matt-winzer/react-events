import React from 'react'
import Card from './Card'

const List = (props) => {
  let cards
  if (props.sunglasses) {
    cards = props.sunglasses.map(sunglass => {
      return <Card key={sunglass._id} sunglass={sunglass.sunglass} />
    })
  }

  return (
    <div className='container'>
      <h1>Hi from the List!</h1>
      <div className='card-container'>
        {cards}
      </div>
    </div>
  )
}

export default List
