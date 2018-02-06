import React from 'react'
import Card from './Card'

const List = (props) => {
  let cards
  if (props.sunglasses) {
    cards = props.sunglasses.map(sunglass => {
      return <Card key={sunglass._id} sunglass={sunglass} />
    })
  }

  return (
    <div>
      <h1>Hi from the List!</h1>
      {cards}
    </div>
  )
}

export default List
