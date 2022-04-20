import styled from "styled-components";
import Leftside from "./Leftside";
import Signup from "./Signup";

const Container = styled.div`
  margin: 100px;
  width: 1064.38px;
  height: 756.89px;
  background: #ebfcf4;
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <Container>
      <Leftside />
      <Signup />
    </Container>
  );
}

export default App;
