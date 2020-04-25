import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TasksNav from './TasksNav'


it('TasksNav renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <TasksNav />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})