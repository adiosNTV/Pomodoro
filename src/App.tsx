
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
        <div className='pomodoro_btn_wrapper'>
          <button className='ShowUpBtn'>To do List</button>
        </div>
      </div>
    </>
  )
}

export default App
