import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Header from './components/Header/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
          <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;