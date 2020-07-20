import React from 'react';
import logo from './logo.svg';
import Layout from "./components/Layout";

import './App.css';
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Weight Coder</h1>
      </Layout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
