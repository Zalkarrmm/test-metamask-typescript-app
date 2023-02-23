import React from 'react'
import MainContent from '../../components/MainContent/MainContent'
import ParticipantsTable from '../../components/ParticipantsTable/ParticipantsTable'
import RegistrationField from '../../components/RegistrationField/RegistrationField'
import './Home.css'
const Home = () => {
  return (
    <div>
      <MainContent />
      <div className='bottom_side'>
        <RegistrationField />
        <ParticipantsTable />
      </div>
    </div>
  )
}

export default Home