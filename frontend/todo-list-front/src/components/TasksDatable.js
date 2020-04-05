import React, { Component } from 'react'
import ObjectList from 'react-object-list'
import '../css/datable.css'
const mockData = require('../assets/demo.data.json')

class TasksDatable extends Component {
  
      render() {
        return <div className="datable responsive mt-2">
            <ObjectList
                columns={[
                {dataKey: 'first_name', header: 'Name '},
                {dataKey: 'email', header: 'Email'},
                {dataKey: 'gender', header: 'Gender'},
                ]}
                data={mockData}
                meta={{ totalCount: mockData.length }}
                favouritesEnabled={false}
            />
        </div>
      }
}

export default TasksDatable
