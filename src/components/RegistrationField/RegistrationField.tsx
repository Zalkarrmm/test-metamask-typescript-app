import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getPatricipants, setUserInfo } from '../../redux/ParticipantsData/ParticipantsSlice'
import { RootState } from '../../redux/store'
import './RegistrationField.css'
const RegistrationField = () => {
  const dispatch = useDispatch<any>() // it will too long to type dispatch so in fast i used "any"
  const [inputClientName, setClientName] = useState<string>('')
  const [inputClientEmail, setClientEmail] = useState<string>('')
  const {address} = useSelector((state:RootState) => state.participiantsData.user)
  const client = useSelector((state:RootState) => state.participiantsData.user)
  const onclickEarlyAccess = () => {
    if(address && inputClientEmail !== '' && inputClientName !== '' ){
      dispatch(setUserInfo({
        email:inputClientEmail, 
        username: inputClientName, 
        address,
        id: `${new Date()}${Math.random() * 100}`
      }))
      dispatch(getPatricipants())
    }
  }

  return (
    <div className='beta_test_registration'>
      <h2 className='beta_test_registration_title'>BETA TEST REGISTRATION</h2>
      <p className='beta_lorem_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className='input_label'>
        <p className='label_text'>
          NAME
        </p>
        { client.username ?
          <p className='beta_test_registration_title'>{client.username}</p>
          :
          <input 
            className='registration_input'
            type="text" 
            placeholder='We will display your name in participation list'
            value={inputClientName}
            onChange={(e) => setClientName(e.target.value)}  
          />
        }
      </div>
      <div className='input_label'>
        <p className='label_text'>
          EMAIL
        </p>
        {client.email ?
          <p className='beta_test_registration_title'>{client.email}</p>
          :
          <input 
            className='registration_input' 
            type="email" 
            placeholder='We will display your email in participation list' 
            value={inputClientEmail}
            onChange={(e) => setClientEmail(e.target.value)}  
          />
        }
        
      </div>
      {
        client.username ?
        
      <button className='list_me_to_table'> 
        LIST ME TO TABLE
      </button>
      :
      
      <button onClick={() => onclickEarlyAccess()} className='early_access_button'> 
        GET EARLY ACCESS
      </button>
      }
    </div>
  )
}

export default RegistrationField