import React, { useState } from 'react'
import Counter from './Counter'

export const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 0, name: 'Ложка' },
    { id: 2, value: 4, name: 'Вилка' },
    { id: 3, value: 1, name: 'Нож' },
    { id: 4, value: 0, name: 'Тарелка' },
    { id: 5, value: 0, name: 'Кастрюля' },
  ]

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(prev => prev.filter((item) => item.id !== id))
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (counterItem) => {
    setCounters(prev => {
      return prev.map(item => {
        return item.id === counterItem.id ? { ...item, value: item.value + 1 } : item
      })
    })
  };
  const handleDecrement = (counterItem) => {
    const elemIndex = counters.findIndex(c => c.id === counterItem.id)
    const newCounters = [...counters]
    newCounters[elemIndex].value++
    setCounters(newCounters)

  };


  return (
    <>
      {counters.map(count =>
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          count={count}
        >
        </Counter>
      )}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>

    </>

  )
}
