import React, { Component ,useState} from 'react'

export default class App extends Component {
  state = {count : 0 , name : "Manan Patel"} // to declare state in class
  increment =()=>{
    this.setState({count : this.state.count+1})
  }
  render() {
  console.log(this.state.count)
    if(this.state.count%2==0){
        return (
      <div>
        <p>count : {this.state.count}</p>                          
        <button onClick={this.increment}>increment </button>
        <button onClick={()=>{this.setState({count :this.state.count -1})}}>decrement </button>
      </div>
    )}
    else{
        return (
      <div>
        <p>sorry odd number occur's</p>

        <p>count : {this.state.count}</p>                          
        <button onClick={this.increment}>increment </button>
        <button onClick={()=>{this.setState({count :this.state.count -1})}}>decrement </button>
      </div>
    )
    }
  }
}
