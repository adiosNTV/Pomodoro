
import './App.css'

import Clock from './component/Clock/Clock'
import DateDisplay from './component/Date/DateDisplay'
import ListDisplay from './component/TodoList/ListDisplay/ListDisplay'

function App() {


  return (
    <>
      <div className='Date'>
        <DateDisplay />
      </div>
      <div className='pomodoro_wrapper'>
        <Clock />
        <div className='pomodoro_btn_wrapper'>
          <ListDisplay />
        </div>
      </div>
    </>
  )
}

export default App
