import {Component} from 'react'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <h1>The button has been clicked {count} times</h1>
        <p>click the button to increase the count</p>
        <button onClick={this.onIncreament}>Click Me</button>
      </div>
    )
  }
}

export default ClickCounter
