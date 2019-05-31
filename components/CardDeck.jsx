import React from 'react'

const Fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass', '☕️']
const ModifiedFibonacci = [0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?', 'Pass']
const PowersOfTwo = [0, 1, 2, 4, 8, 16, 32, 64, '?', 'Pass']
const TShirt = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XLL', '?', 'Pass']

const Card = ({ value }) => (
  <div className="deck px-1 py-2">
    <div className="deck__wrapper">
      <span>{value}</span>
      <span>{value}</span>
    </div>
  </div>
)

const CardDeck = ({ cardSet = '' }) => {
  let currentSet = ''
  if (cardSet) {
    if (cardSet === 'Fibonacci')
      currentSet = Fibonacci.map(value => (
        <Card key={`card-${value}`} value={value} />
      ))

    if (cardSet === 'Modified Fibonacci')
      currentSet = ModifiedFibonacci.map(value => (
        <Card key={`card-${value}`} value={value} />
      ))

    if (cardSet === 'Powers of 2')
      currentSet = PowersOfTwo.map(value => (
        <Card key={`card-${value}`} value={value} />
      ))

    if (cardSet === 'T-Shirt')
      currentSet = TShirt.map(value => (
        <Card key={`card-${value}`} value={value} />
      ))

    return currentSet
  }

  return ''
}

export default CardDeck
