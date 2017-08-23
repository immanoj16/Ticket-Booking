import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSeatNumber } from '../actions'

class Row extends Component {
  constructor (props) {
    super (props)

    this.state = {
      className: null
    }
    this.handleSeatColor = this.handleSeatColor.bind(this)
  }

  handleSeatColor (no) {

    if (this.state.className === null) {
      this.setState({
        className: 'selected'
      })
    } else {
      this.setState({
        className: null
      })
    }

    let seat = this.props.alpha + (no + 1)

    this.props.setSeatNumber(seat)
  }

  render () {
    const rows = []
    for (let i = 0; i < 12; i++) {
      rows.push(i)
    }

    return (
      <tr>
        <td>{this.props.alpha}</td>
        {rows.map((row, no) => {
          return (
            <td key={row}><div className={`seat ${this.state.className}`} onClick={() => this.handleSeatColor(no)}/></td>
          )
        })}
      </tr>
    )
  }
}

export default connect(null, { setSeatNumber })(Row)