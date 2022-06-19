import React from "react"
import styled from "styled-components"

import {
  MAX_NUMBER_OF_PASSWORDS,
  MAX_PASSWORD_LENGTH,
  MIN_NUMBER_OF_PASSWORDS,
  MIN_PASSWORD_LENGTH,
} from "../../../utils"

const Table = styled.table`
  margin: 20px auto;

  .description,
  input {
    width: 100%;
    font-size: 1.3em;
    font-family: "Arima Madurai", cursive;
    padding: 8px;
    border: 2px solid #ccc;
    text-align: left;
    box-sizing: border-box;
  }
  .description > span {
    padding: 4px;
    color: #aaa;
    background-color: linen;
    font-size: 0.8rem;
  }
  input[type="checkbox"] {
    transform: scale(1.6);
    margin-left: 20px;
  }
  @media (max-width: 992px) {
    .description > span {
      font-size: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    .td-description {
      display: none;
    }
  }
`

const OptionTable = ({
  options,
  handleCharListChange,
  change,
  numberOfPasswords,
  passwordLength,
}) => {
  return (
    <Table>
      <tbody>
        {options.map((option, index) => {
          return (
            <tr key={option.name}>
              <td>
                <div className="description">{option.name}</div>
              </td>
              <td className="td-description">
                <div className="description">{option.characters}</div>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => handleCharListChange(index)}
                />
              </td>
            </tr>
          )
        })}
        <tr>
          <td>
            <div className="description">
              Password Length <span>(max: 255)</span>
            </div>
          </td>
          <td>
            <input
              type="number"
              min={MIN_PASSWORD_LENGTH}
              max={MAX_PASSWORD_LENGTH}
              value={passwordLength}
              onChange={(e) => {
                console.log(e.target.value)
                change("passwordLength", e.target.value)
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <div className="description">
              Number of Passwords <span>(max: {199})</span>
            </div>
          </td>
          <td>
            <input
              type="number"
              min={MIN_NUMBER_OF_PASSWORDS}
              max={MAX_NUMBER_OF_PASSWORDS}
              value={numberOfPasswords}
              onChange={(e) => change("numberOfPasswords", e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default OptionTable
