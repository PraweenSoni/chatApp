import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <div className='flex h-screen'>
      <Left/>
      <Right/>
    </div>
    // <Signup/>
    // <Login/>
  )
}

export default App
