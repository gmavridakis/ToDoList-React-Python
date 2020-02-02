import React, { Component } from 'react'

class TasksUI extends Component{

    visibleEditor = false;
    
    constructor(){
        super()
        this.state = {
            editor: ''
        }
    }

    showEditor(){
        this.setState(
            {
                editor: '(created by Greg Foutska)'
            },
            () => {
                console.log('Callback function - show editor')
            }
        )
    }

    hideEditor(){
        this.setState(
            {
                editor: ''
            },
            () => {
                console.log('Callback function - hide editor')
            }
        )
    }

    showTasks(){
        console.log('clicked showTasks');
    }
    deleteTasks(){
        console.log('clicked deleteTasks');
    }
    addTask(){
        console.log('clicked addTask');
    }

    render(){
        return (
            <div>
                <div className="header">
                    <h1 className="main-container">React Application - To Do List {this.state.editor}</h1>
                    <button onClick={ () => this.showEditor() } >Show Editor</button>
                    <button onClick={ () => this.hideEditor() } >Hide Editor</button>
                </div>
                <div className="content">
                    Welcome on To Do List Application
                </div>
                <div className="actions">
                    <button onClick={ () => this.showTasks() } >Show All Tasks</button>
                    <button onClick={ () => this.deleteTasks() } >Delete All Tasks</button>
                    <button onClick={ () => this.addTask() } >Add Task</button>
                </div>
            </div>
        )
    }
}

export default TasksUI