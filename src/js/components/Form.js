import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createUser } from "../actions";

class Form extends Component {

  constructor (props) {
    super (props)

    this.state = {
      name: '',
      seatCount: null
    }

    this.handleName = this.handleName.bind(this)
    this.handleCount = this.handleCount.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleCount (e) {
    this.setState({
      seatCount: e.target.value
    })
  }

  handleToggle (e) {
    e.preventDefault()

    const {name, seatCount} = this.state

    this.props.createUser(name, seatCount, true)
  }

  render () {
    return (
      <div className="col-md-8 col-md-offset-3">
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" onChange={this.handleName}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="no. eg. 1, 2" onChange={this.handleCount} />
          </div>
          <button type="submit" className="btn" onClick={this.handleToggle}>Start Selecting</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    seatCount: state.user.seatCount,
    bookState: state.user.bookState
  }
}

export default connect(mapStateToProps, { createUser })(Form)