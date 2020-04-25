import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScoreBoardList from './ScoreBoardList'


it('ScoreBoardList renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <ScoreBoardList 
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})