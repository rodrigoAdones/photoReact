import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <header>
        <Jumbotron>
          <h1>{this.props.title}</h1>
        </Jumbotron>
      </header>
    )
  }
}
