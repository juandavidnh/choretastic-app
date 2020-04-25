import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddTaskPage from './AddTaskPage'
import STORE from '../../dummy-store'


it('AddTaskPage renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddTaskPage 
                users={STORE.users} 
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})