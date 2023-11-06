import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Main />}></Route>
          <Route path = "/signup" element ={<SignUpForm/>}></Route>
          <Route path = "/signin" element ={<SignInForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
