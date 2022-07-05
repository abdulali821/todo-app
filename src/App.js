import React from 'react'
import './App.css';
import Bg from './components/Bg';
import img from './assets/black-bg.jpg';
import Copyright from './components/Copyright';
import TodoContainer from './components/TodoContainer';

function App() {
  const image = img;
  return (
    <>
    <Bg img={image}/>
    <div className='container'>
      <TodoContainer/>
    </div>
    <Copyright/>
    </>
    
  )
}

export default App;