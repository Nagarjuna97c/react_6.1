import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    this.setState({randomNumber: Math.round(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="para para1">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
