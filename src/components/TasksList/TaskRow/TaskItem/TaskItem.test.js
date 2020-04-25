import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskItem from './TaskItem'
import STORE from '../../../../dummy-store'


it('TaskItem renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <TaskItem 
                users={STORE.users} 
                task={STORE.tasks[0]}
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})