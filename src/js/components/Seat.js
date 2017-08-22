import React, { Component } from 'react'


const Row = (props) => {
  const rows = []
  for (let i = 0; i < 12; i++) {
    rows.push(i)
  }
  return (
    <tr>
      <td>{props.alpha}</td>
      {rows.map(row => {
        return (
          <td><div className='seat' /></td>
        )
      })}
    </tr>
  )
}

class Seat extends Component {

  render () {
    const list = []
    for (let i = 1; i < 13; i++) {
      list.push(<th>{i}</th>)
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
          {rows.map(row => <Row alpha={row} />)}
          </tbody>
        </table>
        <button className="btn center-block">Confirm Booking</button>
      </div>
    )
  }
}

export default Seat