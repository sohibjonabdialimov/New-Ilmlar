import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export default function ProfileProvider({ children }) {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user-data")) || []);
  

  return (
    <ProfileContext.Provider value={{ userData, setUserData}}>
      {children}
    </ProfileContext.Provider>
  );
}
