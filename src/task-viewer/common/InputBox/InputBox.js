import React from 'react'
import './InputBox.scss'
const InputBox = ({
  inputType = 'text',
  placeHolder = '',
  header = '',
  bind = {},
  minFunc = () => {},
}) => {
  return (
    <div className="input-box-container">
      <div className="header">{header}</div>
      <input
        type={inputType}
        {...bind}
        placeholder={placeHolder}
        min={minFunc()}
      />
    </div>
  )
}

export default InputBox
