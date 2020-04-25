import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddFamilyMemberForm from './AddFamilyMemberForm'


it('AddFamilyMemberForm renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddFamilyMemberForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})