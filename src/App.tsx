import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Home from './pages/Home/Home';
import PersonalPage from './pages/PersonalPage/PersonalPage';
import { changeModalIsOpen } from './redux/ParticipantsData/ParticipantsSlice';
import { RootState } from './redux/store';
import { ROUTES_PATH } from './utils/constants';
function App() {
  const dispatch = useDispatch()
  const {user} = useSelector((state:RootState) => state.participiantsData)
  useEffect(() => {
    if (user.address === '') {
      dispatch(changeModalIsOpen(true))
    }else{
      dispatch(changeModalIsOpen(false))
    }
  }, [user.address])
  return (
    <div className="App">
      <Header />
      <Modal />
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