import styled from "styled-components";

const Header = styled.h1`
  height: 15rem;
  background-color: #aa16aa88;
  text-align: center;
  padding: 2rem;
  font-size: 10rem;
  position: relative;
`;

// const Image = styled.img`
//   height: 25%;
//   width: 25%;
//   margin-left: 75rem;
//   padding: 5rem;
// `;

// const Button2 = styled.button`
//   position: absolute;
//   top: 5rem;
//   right: 5rem;
//   color: var(--color-grey-600);
//   background-color: pink;
//   border: 1px solid var(--color-grey-200);
//   width: 10rem;
//   border-radius: 9rem;
//   height: 10rem;
//   margin-bottom: 10rem;

//   &:hover {
//     background-color: var(--color-grey-50);
//   }
//   color: white;
// `;

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `;

function Header1() {
  // const [login, isSetLogin] = useState(false);

  // function handleClick() {
  //   isSetLogin(true);
  // }
  return (
    // <div>

    <Header>
      <p className="title">THE GOOD FOOD</p>
    </Header>

    // </div>
  );
}

export default Header1;
