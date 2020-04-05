import React, { Component } from 'react'
import TasksDatable from './TasksDatable';

class TasksUI extends Component{

    constructor(){
        super()
        this.state = {
            visibleTaskTable: false,
            textShowTable: 'Show All Tasks'
        }

        this.showTasksHandler = this.showTasksHandler.bind(this);
        this.deleteTasksHandler = this.deleteTasksHandler.bind(this);
        this.addTaskHandler = this.addTaskHandler.bind(this);
    }

    showTasksHandler(){
        console.log('clicked showTasks');
        this.state.textShowTable === 'Hide All Tasks'
                    ? this.setState(
                        {  textShowTable : "Show All Tasks" ,  visibleTaskTable: false},
                        () => { console.log('Callback showTasksHandler 1') }
                        )
                    : this.setState(
                        {  textShowTable : "Hide All Tasks" ,  visibleTaskTable: true },
                        () => { console.log('Callback showTasksHandler 2') }
                        )
    }
    deleteTasksHandler(){
        console.log('clicked deleteTasks');
        console.log(this)
    }
    addTaskHandler(){
        console.log('clicked addTask');
        console.log(this)
    }
    
    render(){
        return (
            <div className="row page-container">
                <div className="col-xl-2 col-md-1"></div>
                <div className="col-xl-8 col-md-10">
                    <div className="header">
                        <h3 className="main-container w-100 d-inline-block text-center p-5 bg-info">
                            React Application To Do List <span class="font-italic">by Grigoris Mavridakis</span>
                        </h3>
                    </div>
                    <div className="content">
                        <div className="actions row">
                            <div className="col-4"><button className="btn m-1 w-100" onClick={ this.showTasksHandler } >{this.state.textShowTable}</button></div>
                            <div className="col-4"><button className="btn m-1 w-100" onClick={ this.deleteTasksHandler } >Delete All Tasks</button></div>
                            <div className="col-4"><button className="btn m-1 w-100" onClick={ this.addTaskHandler } >Add Task</button></div>
                        </div>
                        <div className="datatable">
                            {  this.state.visibleTaskTable
                                ? <TasksDatable />
                                : null
                            }    
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-md-1"></div>
            </div>
        )
    }
}

export default TasksUI