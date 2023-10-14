// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// function App() {
//   return (
//     <GoogleOAuthProvider clientId="55607986432-gse382aa4io8j67c4npulurhdc3eeimv.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={(credentialResponse) => {
//           console.log(credentialResponse);
//         }}
//         onError={() => {
//           console.log("Login Failed");
//         }}
//       />
//       ;
//     </GoogleOAuthProvider>
//   );
// }
// export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import Homepage from "./features/homepage/Homepage";
import Login from "./features/login/login";
import { UserContextProvider } from "./context/UserContextProvider";
import Main from "./features/main/Main";

function App() {
  return (
    <>
      <UserContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="main" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
