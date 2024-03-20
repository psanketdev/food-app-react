import { createContext } from "react"

const UserContext = createContext({
  loggedInUser : 'Defalu User',
});

export default UserContext;