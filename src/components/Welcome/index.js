// Write your code here
import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {subscribe: 'Subscribe', subscribed: 'Subscribed'}
  sub = ()=>{
    this.setState(prevState =>({subscribe: prevState.subscribed}))

  }
  unsub = ()=>{
    this.setState ({
      subscribe: 'Subscribe',
      subscribed: 'Subscribed',
    })
  }
  render() {
    const {subscribe, subscribed} = this.state
    let button
    if (subscribe === 'Subscribe') {
      button = <button className="button" onClick={this.sub}>{subscribe}</button>
    } else if (subscribed === "Subscribed") {
      button = <button className="button" onClick={this.unsub}>{subscribed}</button>
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {button}
      </div>
    )
  }
}
export default Welcome
