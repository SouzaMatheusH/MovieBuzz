// Styles Import
import './SendForm.css'

import React, { useState } from 'react'

const SendForm = ({ type, msg, style }) => {
  const cor = style;

  return (
    <button className={style} type={type}>{msg}</button>
  )
}

export default SendForm
