import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JoinHomePage from './JoinHomePage'


it('JoinHomePage renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <JoinHomePage />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})