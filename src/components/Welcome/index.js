// Write your code here

import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: true}

  subSubscribe = () => {
    this.setState(oldState => ({isSubscribe: !oldState.isSubscribe}))
  }

  subButton = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const word = this.subButton()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="describe">Thank you! Happy Learning</p>
        <button type="button" className="btn" onClick={this.subSubscribe}>
          {word}
        </button>
      </div>
    )
  }
}

export default Welcome
