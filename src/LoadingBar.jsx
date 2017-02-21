import React from 'react'

export default class LoadingBar extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const visible = this.props.showBar
    if (visible) {
      console.log('loading...')
      return <h3>Cargando...</h3>
    }
    return null
  }
}
