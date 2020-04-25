import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AssignPage from './AssignPage'


it('AssignPage renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AssignPage />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})