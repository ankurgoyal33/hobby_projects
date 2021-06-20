import React from 'react';

const ActionButton = (props) => (
    <button onClick={props.onClick}> {props.text} </button> 
);

export default ActionButton;
