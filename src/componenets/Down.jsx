import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Image = styled.img`
  height: 25%;
  width: 25%;
  margin-left: 75rem;
  padding: 5rem;
`;

const Button2 = styled.button`
  position: absolute;
  top: 5rem;
  right: 5rem;
  color: var(--color-grey-600);
  background-color: pink;
  border: 1px solid var(--color-grey-200);
  width: 10rem;
  border-radius: 9rem;
  height: 10rem;
  margin-bottom: 10rem;

  &:hover {
    background-color: var(--color-grey-50);
  }
  color: white;
`;

function Down() {
  const [login, isSetLogin] = useState(false);
  const navigate = useNavigate();
  const { setIsLoging } = useContext(UserContext);
  function handleClick() {
    isSetLogin(true);
  }

  function handleLogin() {
    navigate("/login");
    setIsLoging(true);
  }
  return (
    <Div>
      <Image src="/logo2.png" alt="logo" />
      {login ? (
        <Button2 className="login" onClick={handleLogin}>
          LOGIN
        </Button2>
      ) : (
        <Button
          style={{
            textAlign: "center",
            backgroundColor: "green",
            height: "5rem",

            width: "15rem",
            marginLeft: "90rem",
            color: "white",
            marginBottom: "20rem",
          }}
          size="small"
          variation="secondary"
          onClick={handleClick}
        >
          Explore
        </Button>
      )}
    </Div>
  );
}

export default Down;
