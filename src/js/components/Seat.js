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
            <Row alpha="A" />
            <Row alpha="B" />
            <Row alpha="C" />
            <Row alpha="D" />
            <Row alpha="E" />
            <Row alpha="F" />
            <Row alpha="G" />
            <Row alpha="H" />
            <Row alpha="I" />
            <Row alpha="J" />
          </tbody>
        </table>
        <button className="btn center-block">Confirm Booking</button>
      </div>
    )
  }
}

export default Seat