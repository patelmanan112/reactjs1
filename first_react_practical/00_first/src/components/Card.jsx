import React, { Component } from 'react'

export default class Card extends Component {
    componentDidCatch(){
        console.log("First time got render in class component")
    }
  render() {
    return (
      <div>
        <h1>Mounting happend using Class Component in child1 </h1>
      </div>
    )
  }
}
