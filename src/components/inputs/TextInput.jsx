import React from 'react';

const TextInput = (props) => {
  return (
    <input type="text" class="form-control" placeholder={props.placeholder} />
  )
}

export default TextInput;