import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bookToggle } from "../actions";

class Form extends Component {

  handleToggle (e) {
    e.preventDefault()
    console.log(this.props.bookState)

    this.props.bookToggle(this.props.bookState)
    console.log(this.props.bookState)
  }

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
          <button type="submit" className="btn" onClick={this.handleToggle.bind(this)}>Start Selecting</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bookState: state.bookState
  }
}

export default connect(mapStateToProps, { bookToggle })(Form)