import React, { useEffect, useState } from 'react'

import { names } from './data'

function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('right')

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right')
      setIndex((prevIndex) =>
        prevIndex === names.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handlePrevClick = () => {
    setDirection('left')
    setIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setDirection('right')
    setIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    )
  }

  // const nextIndex = index === names.length - 1 ? 0 : index + 1
  const currentName = names[index]

  return (
    <>
      <section className='cont'>
        <article key={index} className={`current enter-${direction}`}>
          <img src={currentName.img} alt='bassey imikan' className='img' />
          <h5>{currentName.name}</h5>
          <p className='status'>{currentName.status}</p>
          <p className='info'>{currentName.info}</p>
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 512 512'
            className='icon'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'></path>
          </svg>
        </article>

        <button type='button' className='prev' onClick={handlePrevClick}>
          <svg
            stroke='currentColor'
            fill='none'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke-linecap='round'
            stroke-linejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </button>
        <button type='button' className='next' onClick={handleNextClick}>
          <svg
            stroke='currentColor'
            fill='none'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke-linecap='round'
            stroke-linejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='9 18 15 12 9 6'></polyline>
          </svg>
        </button>
      </section>
    </>
  )
}

export default App
