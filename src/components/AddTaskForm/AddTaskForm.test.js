import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddTaskForm from './AddTaskForm'


it('AddTaskForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddTaskForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})