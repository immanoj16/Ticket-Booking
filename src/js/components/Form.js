import React, { Component } from 'react'

class Form extends Component {

  render () {
    return (
      <div className="col-md-8 col-md-offset-3">
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="no. eg. 1, 2" />
          </div>
          <button type="submit" className="btn" onClick={this.props.handleBooking}>Start Selecting</button>
        </form>
      </div>
    )
  }
}

export default Form