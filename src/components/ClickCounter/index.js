import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prev => {
      return {count: prev.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">
            The Button has been clicked <br />
            <span className="card-counter-variable">{count}</span>
            &ensp;times
          </h1>
          <p className="card-para">Click the button to increase the count!</p>
          <button onClick={this.increment} className="card-button">
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
