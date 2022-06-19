import React from "react"
import styled from "styled-components"
import { handleClipboardCopy } from "../../../utils"
import RedoSvg from "../../../assets/redo.svg"

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  button {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    background-color: #ccc;
    transition: all 0.25s linear;
    &:hover {
      background-color: #b4b4b4;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

const GeneratedPasswords = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  place-items: center;
  .password {
    position: relative;
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
    word-break: break-all;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    font-family: "Courier New", monospace;
    transition: all 0.25s linear;
    &:hover {
      background-color: #b4b4b4;
    }
    span {
      padding: 10px;
    }
  }
`

const GeneratedResults = ({ passwordArray, reCreate }) => {
  return (
    <>
      <Title>
        <h1>Generated passwords</h1>
        <button onClick={() => reCreate()}>
          <img src={RedoSvg} alt="" />
        </button>
      </Title>
      <h3>Please left-click on text to get it copied</h3>
      <GeneratedPasswords>
        {passwordArray.map((value, index) => (
          <p key={`${index}-${value}`} className="password">
            <span
              role="none"
              id={`password${index}`}
              onClick={handleClipboardCopy}
            >
              {value}
            </span>
          </p>
        ))}
      </GeneratedPasswords>
    </>
  )
}

export default GeneratedResults
