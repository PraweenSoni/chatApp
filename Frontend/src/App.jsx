import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'

const App = () => {
  return (
    <div className='flex h-screen'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App