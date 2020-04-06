import React, { Component } from 'react'
import '../css/datable.css'
import axios from 'axios'

class DeleteAllTasks extends Component {
    
    constructor(props) {
      super(props)
      axios.get('http://127.0.0.1:5001/deletetasks')
      .then(res => {
        this.setState({ result: 'Task list is now empty...' , })
      })
      .catch( e => {
        console.error(e)
        this.setState({ result: 'Error retreiving data' })
      })
      this.state = {
        result: ''
      }
    }

    render() {
      const { result } = this.state
      return <div className="datable responsive mt-2">
        <div><h4>{result}</h4></div>
      </div>
    }
}

export default DeleteAllTasks
