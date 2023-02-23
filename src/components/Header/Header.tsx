import React, { useState, useEffect } from 'react'
import { BigTextCutter } from '../../utils/helpers'
import { useEthers} from '@usedapp/core'
import './Header.css'
import { useDispatch } from 'react-redux'
import { changeAddressState } from '../../redux/ParticipantsData/ParticipantsSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { account, activateBrowserWallet } = useEthers()
  const [useAddress, setUserAddress] = useState<String | null>('')
  useEffect(() => {
    if(account){
      setUserAddress(account);
      dispatch(changeAddressState(account))
    }
  }, [account, dispatch])
  const connectMetamask = async () => {
    activateBrowserWallet()
  }
  return (
    <div className='header'>
      <div className='some_logo'>
        LOGO
      </div>
      <div>
        {useAddress ? 
          <p>
            {BigTextCutter(useAddress, 15)}
          </p>
          :
          <button className='connect_button' onClick={() => connectMetamask()} >
            CONNTECT METAMASK
          </button>
        }
      </div>
    </div>
  )
}

export default Header