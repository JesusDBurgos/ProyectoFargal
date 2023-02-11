import React from 'react'

const InputField = (props) => {
  return (
    <input  type={props.type} 
            className="form-control mt-1" 
            id={props.id} name={props.name} 
            /* value={props.value}  */
            placeholder={props.placeholder} 
            required 
            autoComplete={props.autoComplete}
    />
  )
}

export default InputField;
