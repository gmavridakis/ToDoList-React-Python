import React, { Component } from 'react'
import '../css/datable.css'
import axios from 'axios'

class AddTask extends Component {
    
    constructor(props) {
      super(props)

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        result: '',
        username: '',
        task: ''
      }
    }
    
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
      if(this.state.username.length && this.state.task.length){
        this.updateDatabase(this.state.username,this.state.task)
      }
      event.preventDefault();
    }

    updateDatabase(username,task){
      axios.get('http://127.0.0.1:5001/addtask?task='+task +'&user=' +username)
      .then(res => {
        this.setState({ result: 'Task was added successfully...' , })
      })
      .catch( e => {
        console.error(e)
        this.setState({ result: 'Error updating data' })
      })
    }
    render() {
      const { result } = this.state
      return <div className="datable responsive mt-2">
        {
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" type="text" name="username" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label>Task Description</label>
                  <textarea className="form-control" type="text" name="task" onChange={this.handleChange} />
                </div>
                  <input type="submit" value="Submit" />    
                </form>
              </div>
            </div>
        }
        <div className="mt-2"><h4>{result}</h4></div>
      </div>
    }
}

export default AddTask
