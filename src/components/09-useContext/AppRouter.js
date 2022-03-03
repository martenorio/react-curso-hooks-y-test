import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <div className="container">
              <Routes>
                  <Route exact path='/' element={ <HomeScreen /> }></Route>
                  <Route exact path='/about' element={ <AboutScreen />}></Route>
                  <Route exact path='/login' element={ <LoginScreen />}></Route>
                  <Route path="*" element={ <Navigate replace to="/" /> /*<HomeScreen /> */ }></Route>
              </Routes>
            </div>
        </div>
    </Router>
  )
}
