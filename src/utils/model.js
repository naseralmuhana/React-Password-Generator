import "../index.css"

export const MAX_PASSWORD_LENGTH = 255
export const MIN_PASSWORD_LENGTH = 1
export const MAX_NUMBER_OF_PASSWORDS = 199
export const MIN_NUMBER_OF_PASSWORDS = 1

export const Functor = (v) => ({
  map: (f) => Functor(f(v)),
  out: (f) => f(v),
})

export const renderPasswords = (numberOfPasswords, passwordLength, options) => {
  return Functor([]).out((passwords) => {
    for (let i = 0; i < numberOfPasswords; i++) {
      Functor()
        .map(() => generateCharactersList(options))
        .map((characterList) =>
          generateSinglePassword(characterList, passwordLength)
        )
        .out((password) => passwords.push(password))
    }
    return passwords
  })
}

// Generate a String of characters to use in a password,
// based on the options selected by the user.
// Example: if 4 options are selected, the list will be,
// `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=|{}[]].,;:?\/"<>'0123456789`
export const generateCharactersList = (options) => {
  return Functor("").out((characterList) => {
    options.forEach((option) => {
      if (option.selected) {
        characterList += option.characters
      }
    })
    return characterList
  })
}

export const generatePassword = (randomNumbersArray, characterList) => {
  let password = ""

  for (const number of randomNumbersArray) {
    Functor()
      // Calculating random integer in the range of 0-(charactersList.length-1)
      // inspired by: https://stackoverflow.com/questions/1527803/
      // (only we do not need Math.floor() as bitwise operator >> is used)
      .map(() => (number * characterList.length) >> 16)
      .out((randomIndex) => {
        password += characterList[randomIndex]
      })
  }

  return password
}

export const generateSinglePassword = (characterList, passwordLength) => {
  return Functor()
    .map(() => new Uint16Array(passwordLength))
    .map((emptyNumberArray) => crypto.getRandomValues(emptyNumberArray))
    .out((randomNumbersArray) =>
      generatePassword(randomNumbersArray, characterList)
    )
}

export const validate = (field, value) => {
  let number = Number(value)
  switch (field) {
    case "passwordLength":
      if (number > MAX_PASSWORD_LENGTH) {
        number = MAX_PASSWORD_LENGTH
      } else if (number < MIN_PASSWORD_LENGTH) {
        number = MIN_PASSWORD_LENGTH
      }
      return number
    case "numberOfPasswords":
      if (number > MAX_NUMBER_OF_PASSWORDS) {
        number = MAX_NUMBER_OF_PASSWORDS
      } else if (number < MIN_NUMBER_OF_PASSWORDS) {
        number = MIN_NUMBER_OF_PASSWORDS
      }
      return number
    default:
      return number
  }
}

export function adjustAt(items, index, adjuster) {
  return [
    ...items.slice(0, index),
    adjuster(items[index]),
    ...items.slice(index + 1),
  ]
}

export async function handleClipboardCopy(event) {
  const id = event.target.id
  const container = document.getElementById(id)
  try {
    await navigator.clipboard.writeText(container.innerText)
  } catch (err) {
    alert("Copy to clipboard unsuccessful")
  }

  const notification = document.createElement("div")
  notification.classList.add(`red`)
  notification.innerText = "COPIED!!!"
  container.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 2000)
}
