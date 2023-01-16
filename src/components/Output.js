import React from 'react';
import OutputRow from './OutputRow';

const Output = props => {
  return (
    <div>
        <OutputRow value={props.answer} textSize={{fonstSize:'20px'}}></OutputRow>
        <OutputRow value={props.user}></OutputRow>
    </div>
  )
}

export default Output