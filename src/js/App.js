import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from './components/Form'
import Seat from './components/Seat'
import BookedList from './components/BookedList'

class App extends Component {

  render () {
    return (
      <div className="container">
        <h1 className="text-center">Popcorn Time</h1>
        <div className="row">
          <Form/>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <hr />
          </div>
        </div>
        <div className="row">
          {this.props.bookState ? <Seat/> : null}
        </div>
        <div className="row">
          {this.props.bookConfirm ? <BookedList/> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookState: state.user.bookState,
    bookConfirm: state.user.bookConfirm
  }
}

export default connect(mapStateToProps)(App)
