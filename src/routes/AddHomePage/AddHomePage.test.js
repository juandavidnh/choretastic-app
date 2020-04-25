import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddHomePage from './AddHomePage'


it('AddHomePage renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddHomePage />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})