import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddHomeForm from './AddHomeForm'


it('AddHomeForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddHomeForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})