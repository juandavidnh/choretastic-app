import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JoinHomeForm from './JoinHomeForm'


it('JoinHomeForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <JoinHomeForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})