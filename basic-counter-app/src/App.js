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
          <ButtonComponent btnValue={9} incrementMethod={this.incrementConterValue}/>
          <ButtonComponent btnValue={8} incrementMethod={this.incrementConterValue}/>
          <ButtonComponent btnValue={7} incrementMethod={this.incrementConterValue}/>
        </div>
        <div className="resultPart">
          <span className="spanCounter">{this.state.counter}</span>
        </div>
        <div>
          <button  className="resetButton" onClick={this.resetCalculator}>Reset</button>
        </div>
      </div>
    )
  }

  incrementConterValue = (value) => {
    this.setState({
      counter: this.state.counter + value
    })
  }

  resetCalculator = () => {
    this.setState({counter: 0})
    //console.log('resetCalculator')
  }
}

export default App
