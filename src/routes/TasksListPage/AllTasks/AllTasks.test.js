import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AllTasks from './AllTasks'


it('AllTasks renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AllTasks match={{params: {id:1}, isExact: true, path:"/task-list"}}/>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})