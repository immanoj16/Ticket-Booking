import React, { Component } from 'react'

import Form from './components/Form'
import Seat from './components/Seat'
import BookedList from './components/BookedList'

class App extends Component {

  constructor (props) {
    super (props)

    this.state = {
      book: false
    }

    this.handleBooking = this.handleBooking.bind(this)
  }
  handleBooking (e) {
    e.preventDefault()

    this.setState({
      book: true
    })
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center">Popcorn Time</h1>
        <div className="row">
          <Form handleBooking={this.handleBooking} />
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <hr />
          </div>
        </div>
        <div className="row">
          {this.state.book ? <Seat/> : null}
        </div>
        <div className="row">
          <BookedList/>
        </div>
      </div>
    )
  }
}

export default App
