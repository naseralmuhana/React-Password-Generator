import { useState } from "react"
import { adjustAt, renderPasswords, validate } from "../utils"

const initialState = {
  options: [
    {
      name: "Lowercase characters",
      characters: "abcdefghijklmnopqrstuvwxyz",
      selected: true,
    },
    {
      name: "Uppercase characters",
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      selected: true,
    },
    {
      name: "Symbols",
      characters: "!@#$%^&*()_-+=|{}[]].,;:?\\/\"<>'",
      selected: true,
    },
    {
      name: "Digits",
      characters: "0123456789",
      selected: true,
    },
  ],
  passwordLength: 20,
  numberOfPasswords: 10,
}

const usePassword = () => {
  const [state, setState] = useState(initialState)
  const { numberOfPasswords, passwordLength, options } = state

  const passwordArray = renderPasswords(
    numberOfPasswords,
    passwordLength,
    options
  )

  const change = (field, value) => {
    const validated = validate(field, value)
    setState({ ...state, [field]: validated })
  }

  const reCreate = () => {
    setState({ ...state })
  }

  function handleCharListChange(index) {
    if (state.options.filter((x) => x.selected).length === 1) {
      setState(function (prevState) {
        return {
          ...prevState,
          options: adjustAt(prevState.options, index, (x) => ({
            ...x,
            selected: true,
          })),
        }
      })
    } else {
      setState(function (prevState) {
        return {
          ...prevState,
          options: adjustAt(prevState.options, index, (x) => ({
            ...x,
            selected: !x.selected,
          })),
        }
      })
    }
  }

  return {
    state,
    passwordArray,
    change,
    reCreate,
    handleCharListChange,
  }
}

export default usePassword
