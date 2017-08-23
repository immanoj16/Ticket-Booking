import React, { Component } from 'react'


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
    console.log(this.props.alpha + (no + 1))
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
        <button className="btn center-block">Confirm Booking</button>
      </div>
    )
  }
}

export default Seat