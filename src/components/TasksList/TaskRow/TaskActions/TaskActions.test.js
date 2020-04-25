import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskActions from './TaskActions'
import STORE from '../../../../dummy-store'


it('TaskActions renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <TaskActions 
                users={STORE.users} 
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})