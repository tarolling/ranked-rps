import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Login from "./components/Login";
import Home from "./components/Home";
import Game from "./components/Game";

const AppContainer = styled.main`
  background-color: #f5f5f5;
  min-height: 100vh;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  background: linear-gradient(to right, #000, #222);
  padding: 1rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AppContainer>
      <Header>
        <Logo>Ranked RPS</Logo>
      </Header>
      <HashRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/game"
            element={isAuthenticated ? <Game /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
          />
        </Routes>
      </HashRouter>
    </AppContainer>
  );
}

export default App;
