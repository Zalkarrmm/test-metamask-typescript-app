import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import PersonalPage from './pages/PersonalPage/PersonalPage';
import { ROUTES_PATH } from './utils/constants';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path={ROUTES_PATH.main}
          element={
            <Home />
          }
        />
        <Route
          path={ROUTES_PATH.personalPage}
        >
          <Route
            path=':id'
            element={
              <PersonalPage />
            }
          />
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;