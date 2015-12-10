import React, { Component } from 'react'

class Square extends Component {

  handleClick() {
    if (this.props.clickCb) {
      this.props.clickCb()
    }
  }

  render () {
    const winner = this.props.win
    const player = this.props.player

    const status = winner ? `${player} win` : player

    const div = player ?
      <div className={status}>{player}</div> :
      <div onClick={this.handleClick.bind(this)} />

    return div
  }
}

export default Square
