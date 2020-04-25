import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddFamilyMemberPage from './AddFamilyMemberPage'


it('AddFamilyMemberPage renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddFamilyMemberPage 
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})