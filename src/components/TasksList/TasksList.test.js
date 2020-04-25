import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TasksList from './TasksList'


it('TasksList renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <TasksList />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})