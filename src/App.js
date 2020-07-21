import React from 'react';
import Layout from "./components/Layout";

import "./App.scss";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
