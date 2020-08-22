import { createContext, useState } from "react";

const userContext = createContext();
const userDispatchContext = createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={user}>
      <userDispatchContext.Provider value={setUser}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  );
};

export default Store;
export { userContext, userDispatchContext };
