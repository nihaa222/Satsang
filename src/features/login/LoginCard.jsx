import styled from "styled-components";
import "../../style/index.css";

const Button = styled.button`
  color: var(--color-grey-600);
  background: #a54ca5b7;
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  height: 5rem;
  width: 10rem;
  margin-top: 3rem;
  margin-left: 8rem;
  color: white;
  &:hover {
    background-color: var(--color-grey-50);
  }
`;

function LoginCard() {
  return (
    <div className="box">
      <div className="login">
        <p className="loginHeading">Login Here!</p>
      </div>

      <div className="inputholder">
        <div className="inputs">
          <label id="username">Enter Your Username </label>
          <input
            htmlFor="username"
            placeholder="username"
            className="logininput"
          ></input>
        </div>

        <div className="inputs">
          <label id="username">Enter Your Email </label>
          <input
            htmlFor="username"
            placeholder="username"
            className="logininput"
          ></input>
        </div>

        <div className="inputs">
          <label id="username">Enter Your Passward</label>
          <input
            htmlFor="username"
            placeholder="username"
            className="logininput"
          ></input>
          <div className="Submit">
            <Button className="buttonlogin">SUBMIT</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
