import React from 'react'

const Fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass', '☕️']
const ModifiedFibonacci = [0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?', 'Pass']
const PowersOf2 = [0, 1, 2, 4, 8, 16, 32, 64, '?', 'Pass']
const TShirt = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XLL', '?', 'Pass']

const Card = ({ value }) => (
  <div className="deck px-1 py-2">
    <div className="deck__wrapper">
      <span>{value}</span>
      <span>{value}</span>
    </div>
  </div>
)

const CardDeck = ({ cardSet = 'Fibonacci' }) => {
  if (cardSet) {
    if (cardSet === 'Fibonacci') {
      return Fibonacci.map(value => <Card key={value} value={value} />)
    }
    if (cardSet === 'Modified Fibonacci') {
      return ModifiedFibonacci.map(value => <Card key={value} value={value} />)
    }
    if (cardSet === 'Powers Of 2') {
      return PowersOf2.map(value => <Card key={value} value={value} />)
    }
    if (cardSet === 'T-Shirt') {
      return TShirt.map(value => <Card key={value} value={value} />)
    }

    return ''
  }

  return ''
}

export default CardDeck
