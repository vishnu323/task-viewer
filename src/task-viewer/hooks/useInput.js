import { useState } from 'react'

const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const reset = () => {
    setInputValue(initialValue)
  }
  const bind = {
    value: inputValue,
    onChange: (e) => setInputValue(e.target.value),
  }
  return [inputValue, bind, reset]
}

export default useInput
