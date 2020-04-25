import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskRow from './TaskRow'
import STORE from '../../../dummy-store'


it('TaskRow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <TaskRow 
                users={STORE.users} 
                task={STORE.tasks[0]}
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})