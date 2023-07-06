
import './App.css'

import Clock from './component/Clock/Clock'
import DateDisplay from './component/Date/DateDisplay'

function App() {


  return (
    <>
      <div className='Date'>
        <DateDisplay />
      </div>
      <div className='pomodoro_wrapper'>
        <Clock />
      </div>
    </>
  )
}

export default App
