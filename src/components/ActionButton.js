import React from 'react';

const ActionButton = (props) => (
    <button onClick={props.handleShowOption}> {props.text} </button> 
);

export default ActionButton;
