import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AssignForm from './AssignForm'


it('AssignForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AssignForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})