import styled from "styled-components"
import { usePasswords } from "../../hooks"
import { OptionTable, GeneratedResults } from "./components"

const Container = styled.div`
  margin: 1% auto;
  width: 100%;
`

const Home = () => {
  const { state, passwordArray, change, handleCharListChange, reCreate } =
    usePasswords()
  const { options, numberOfPasswords, passwordLength } = state
  return (
    <Container>
      <OptionTable
        options={options}
        handleCharListChange={handleCharListChange}
        change={change}
        numberOfPasswords={numberOfPasswords}
        passwordLength={passwordLength}
      />
      <GeneratedResults passwordArray={passwordArray} reCreate={reCreate} />
    </Container>
  )
}

export default Home
