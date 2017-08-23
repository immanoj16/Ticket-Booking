import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSeatNumber, confirmBooking } from '../actions'

class Row extends Component {
  constructor (props) {
    super (props)

    this.state = {
      className: null
    }
    this.handleSeatColor = this.handleSeatColor.bind(this)
    this.setNullState = this.setNullState.bind(this)
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

  setNullState () {
    this.setState({
      className: null
    })

    console.log(this.state.className)
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

class Seat extends Component {

  handleConfirm () {
    this.props.confirmBooking()
  }

  render () {
    const list = []
    for (let i = 1; i < 13; i++) {
      list.push(<th key={i}>{i}</th>)
    }

    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

    return (
      <div className="col-md-6 col-md-offset-3">
        <table className="table borderless">
          <thead>
            <tr>
              <th></th>
              {list}
            </tr>
          </thead>
          <tbody>
          {rows.map((row, no) => <Row key={row} alpha={row} setSeatNumber={this.props.setSeatNumber} />)}
          </tbody>
        </table>
        <button className="btn center-block" onClick={this.handleConfirm.bind(this)}>Confirm Booking</button>
      </div>
    )
  }
}

export default connect(null, { setSeatNumber, confirmBooking })(Seat)