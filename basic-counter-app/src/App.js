import './App.css'
import React from 'react'
import HeadComponent from './components/HeadComponent'
import ButtonComponent from './components/ButtonComponent'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }
  render = () => {
    return (
      <div className="App">
        <div className="numPad">
          <HeadComponent />
          <ButtonComponent btnValue={9} />
          <ButtonComponent btnValue={8} />
          <ButtonComponent btnValue={7} />
        </div>
        <div className="resultPart">
          <span className="spanCounter">{this.state.counter}</span>
        </div>
        <div>
          <button  className="resetButton">Reset</button>
        </div>
      </div>
    )
  }
}

export default App
