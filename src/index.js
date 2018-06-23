import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class MyHero extends React.Component{
  render(){
    return(
      <div className="main-cont">

        <div className="top">

          <h1 className="title">Nico's Burritos</h1>

        </div>

        <div className="content">
          <div className="c1 left" >
          <h3>Hello from left</h3>
          </div>

          <div className="c1 right">
          <h3>Hello from right</h3>

          </div>

        </div>

        <div className="bottom">
        <p>By: Nicholas Goodman</p>

        </div>

      </div>
    )
  }
}

ReactDOM.render(<MyHero/>, document.getElementById('root'))