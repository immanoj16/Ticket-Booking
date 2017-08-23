import React, { Component } from 'react'
import { connect } from 'react-redux'

const BookedList = (props) => {

  const { name, seatCount, seatDetails } = props.user

  return (
    <div className="col-md-8 col-md-offset-2">
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>Name</th>
          <th>Seat Count</th>
          <th>Seat Details</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{seatCount}</td>
            <td>{seatDetails.map(seat => seat + ', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(BookedList)