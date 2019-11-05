import React from 'react';
import  style from './Form.module.css';

export const TextArea = ({input, meta, ...props}) =>{
const isError = meta.touched && meta.error? style.error : ``;
const placeHolder = meta.touched && meta.error? `${meta.error}`: 'write text';

  return (
    <div className={isError} >
      <textarea {...props } {...input}  placeholder={placeHolder} />
    </div>
  )
};