import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScoreBoardItem from './ScoreBoardItem'


it('ScoreBoardItem renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <ScoreBoardItem 
                user="Test User" 
                position={10}
                score={10}
            />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})