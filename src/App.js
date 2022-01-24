import React from 'react';
import logo from './logo.svg';
import {
  Routes,
  Route
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import AuthProvider from './app/AuthProvider'
import Layout from './app/Layout';
import LoginPage from './app/LoginPage';

import './App.css';
import Home from './features/home/Home';
import About from './features/about/About';
import Messages from './features/messages/Messages';
import RequireAuth from './routes/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route
            path="/messages"
            element={
              <RequireAuth>
                <Messages />
              </RequireAuth>
            }
          />
          <Route path="/*" element={Home} />
        </Route>
      </Routes>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
