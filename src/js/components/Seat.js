import React, { Component } from 'react'
import { connect } from 'react-redux'

import Row from './Row'
import { confirmBooking } from '../actions'


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
          {rows.map((row, no) => <Row key={row} alpha={row} />)}
          </tbody>
        </table>
        <button className="btn center-block" onClick={this.handleConfirm.bind(this)}>Confirm Booking</button>
      </div>
    )
  }
}

export default connect(null, { confirmBooking })(Seat)