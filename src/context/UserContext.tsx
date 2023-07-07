import React, {createContext, useState} from 'react';

// Creamos el contexto de usuario
const UserContext = createContext({});

// Creamos un componente proveedor para envolver nuestra aplicación
const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // Función para establecer el usuario
  const setLoggedInUser = loggedInUser => {
    setUser(loggedInUser);
  };

  return (
    <UserContext.Provider value={{user, setLoggedInUser}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
