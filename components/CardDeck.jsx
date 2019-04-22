import React from 'react'

const Card = ({ value }) => (
  <td>
    <div className="deck">
      <div className="deck__wrapper">
        <span>{value}</span>
        <span>{value}</span>
      </div>
    </div>
  </td>
)

const CardDeck = ({
  cardValues = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass', '☕️'],
}) => {
  if (cardValues)
    return cardValues.map(value => <Card key={value} value={value} />)

  return ''
}

export default CardDeck
