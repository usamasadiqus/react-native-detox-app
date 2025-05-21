import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
  name?: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const login = (name: string) => {
    name && setName(name);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setName('');
    setIsLoggedIn(false);
  };

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      name,
    }),
    [isLoggedIn, name],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
