import React from 'react';
import './App.css';
import NavBarMain from './Links/NavBarMain';
import Routes from './Routes/Routes';
import BannerDeal from "./Components/BannerDeal"
import AuthContextProvider from "./Components/AuthContext"
import Footer from './Links/Footer';

function App() {
  return (
    <>
    <AuthContextProvider>
      <BannerDeal/>
      <div className="App"> 
        <NavBarMain/>
        <Routes/>
        <Footer/>
      </div>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
