// Library Import
import { Link } from 'react-router-dom'

// Styles Import
import './SendForm.css'

import React, { useState } from 'react'

const SendForm = ({ type, msg, style }) => {
  const cor = style;

  return (
    <Link className={style} type={type} to={"/Home"}>{msg}</Link>
  )
}

export default SendForm
