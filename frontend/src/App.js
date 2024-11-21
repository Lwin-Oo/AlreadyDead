import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
