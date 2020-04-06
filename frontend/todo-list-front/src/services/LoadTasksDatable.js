import React, { Component } from 'react'
import '../css/datable.css'
import axios from 'axios'

class LoadTasksDatable extends Component {
    
    constructor(props) {
      super(props)
      axios.get('http://127.0.0.1:5001/viewtasks',{
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        })
      })
      .then(res => {
        this.setState({ tasks: res.data })
      })
      .catch( e => {
        console.error(e)
        this.setState({ errorMsg: 'Error retreiving data' })
      })
      this.state = {
         tasks: [],
         errorMsg: 'List is empty of tasks!'
      }
    }
    

      render() {
        const { tasks, errorMsg } = this.state
        console.log(tasks)
        return <div className="datable responsive mt-2">
          {
            tasks.length ?
              <div className="tasks-content">
              <h5>{tasks.length} tasks found</h5>
              <div className="header row">
                <div className="col-1 float-left font-weight-bold"> ID </div>
                <div className="col-3 float-left font-weight-bold"> User </div>
                <div className="col-8 float-left font-weight-bold"> Description </div>              
              </div>
              <div className="body row pt-1">
                { 
                  tasks.map( (task,index) => <div className="w-100 d-inline-block">
                    <div className="col-1 float-left"> {task[0]} </div>
                    <div className="col-3 float-left"> {task[2]} </div>
                    <div className="col-8 float-left"> {task[1]} </div>              
                    </div>)
                }
              </div>
              </div>
            : <div><h4>{errorMsg}</h4></div>
          }
        </div>
      }
}

export default LoadTasksDatable
