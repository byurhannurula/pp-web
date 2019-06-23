/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

const Fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?']
const ModifiedFibonacci = [0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?']
const PowersOfTwo = [0, 1, 2, 4, 8, 16, 32, 64, '?']
const TShirt = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XLL', '?']

const Card = ({ value, onClick }) => (
  <div className="deck px-1 py-2" data-value={value} onClick={onClick}>
    <div className="deck__wrapper">
      <span>{value}</span>
      <span>{value}</span>
    </div>
  </div>
)

const CardDeck = ({ cardSet = '', onClick }) => {
  let currentSet = ''
  if (cardSet) {
    if (cardSet === 'Fibonacci')
      currentSet = Fibonacci.map(value => (
        <Card key={`card-${value}`} value={value} onClick={onClick} />
      ))

    if (cardSet === 'Modified Fibonacci')
      currentSet = ModifiedFibonacci.map(value => (
        <Card key={`card-${value}`} value={value} onClick={onClick} />
      ))

    if (cardSet === 'Powers of 2')
      currentSet = PowersOfTwo.map(value => (
        <Card key={`card-${value}`} value={value} onClick={onClick} />
      ))

    if (cardSet === 'T-Shirt')
      currentSet = TShirt.map(value => (
        <Card key={`card-${value}`} value={value} onClick={onClick} />
      ))

    return currentSet
  }
  if (!cardSet) {
    currentSet = Fibonacci.map(value => (
      <Card key={`card-${value}`} value={value} onClick={onClick} />
    ))

    return currentSet
  }

  return ''
}

export default CardDeck
