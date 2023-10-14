import styled from "styled-components";
import Header1 from "../../componenets/Header1";
import LoginCard from "./LoginCard";
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
function Login() {
  return (
    <>
      <Div>
        <Header1 />
        <LoginCard />
      </Div>
    </>
  );
}

export default Login;
