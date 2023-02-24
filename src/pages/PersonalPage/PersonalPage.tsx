import React, { useEffect, useLayoutEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPersonalData, putAddress } from '../../redux/PersonalData/PersonalDataClice'
import { RootState } from '../../redux/store'
import './PersonalPage.css'
const PersonalPage = () => {
  const dispatch = useDispatch<any>()
  const {address, email, username} = useSelector((state: RootState) => state.personalPage)
  let {id} = useParams()
  useLayoutEffect(() => {
    if(id){
      dispatch(putAddress(id))
    }
  }, [])
  useEffect(() => {
    if(address === id){
      dispatch(getPersonalData(address))
    }
  }, [address])
  return (
    <div className='personal_page'>
      <h1>PERSONAL DATA</h1>
      <div className='info_block_inner'>
        <div className='info_block'>
          <h3>NAME</h3>
          <p>
            {username}
          </p>
        </div>
        <div className='info_block'>
          <h3>EMAIL</h3>
          <p>
            {email}
          </p>
        </div>
        <div className='info_block'>
          <h3>WALLET</h3>
          <p>
            {address}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalPage