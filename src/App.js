import React from 'react';
import './App.css';
import { Button } from 'antd';
import PageRouter from './router/router'
import Home from './container/Home'
import '../src/static/css/style.css'
function App() {
  return (
    <div className="App">
        <PageRouter/>
        <div>
          hello world
        </div>
    </div>
  );
}

export default App;
