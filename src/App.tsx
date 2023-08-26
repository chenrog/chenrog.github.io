import React from 'react';
import './App.css';
import Header from './components/Header/Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="section">
          <div className="container">
            <h1>Hello</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;