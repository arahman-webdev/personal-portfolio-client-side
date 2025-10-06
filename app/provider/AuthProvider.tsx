"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  setRefreshToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setAccessToken: () => {},
  setRefreshToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({
  children,
  initialAccessToken,
  initialRefreshToken,
}: {
  children: React.ReactNode;
  initialAccessToken: string | null;
  initialRefreshToken: string | null;
}) {
  const [accessToken, setAccessToken] = useState(initialAccessToken);
  const [refreshToken, setRefreshToken] = useState(initialRefreshToken);

  const isAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, isAuthenticated, setAccessToken, setRefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
