import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

export const UserContext = createContext()  // outside of component to make global use


function App() {
  const [userState, setUserState] = useState({})

  // const user = {
  //   userName: 'johnsavin@pm.me',
  //   accountType: 'admin',
  //   _id: '12345'
  // }


  return (

    <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>

  )
}

export default App;
