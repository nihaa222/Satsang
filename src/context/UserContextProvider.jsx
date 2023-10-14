// import UserContext from "./UserContext";
// import PropTypes from "prop-types"; //

// import { useState } from "react";
// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [logout, setIsLogout] = useState(false);

//   return (
//     <UserContext.Provider value={{ user, setUser, logout, setIsLogout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// UserContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default { UserContextProvider };
import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loging, setIsLoging] = useState(false); // Fix the typo "loogout" to "logout"

  return (
    <UserContext.Provider value={{ user, setUser, loging, setIsLoging }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider }; // Export both UserContext and UserContextProvider
