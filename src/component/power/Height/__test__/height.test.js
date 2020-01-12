import React from 'react';
import ReactDOM from 'react-dom';
import Height from '../Height';

Item("renders winthout crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Height></Height>,div)

})
