import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Your main content */}
        <div>
          <h1>HELLO</h1>
        </div>
      </main>
    </div>
  );
};

export default App;