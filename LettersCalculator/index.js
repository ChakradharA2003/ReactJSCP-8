// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onUpdateCount = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="description-container">
          <h1 className="heading">
            Calculate the <br />
            Letters you enter
          </h1>
          <p className="input-heading">Enter the Phrase</p>
          <input
            type="text"
            placeholder="Enter the Phrase"
            className="input-style"
            onChange={this.onUpdateCount}
          />
          <p className="count-para">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
