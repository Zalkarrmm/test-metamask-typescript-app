import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPersonalData, putAddress } from '../../redux/PersonalData/PersonalDataClice'
import { RootState } from '../../redux/store'
import './PersonalPage.css'
const PersonalPage = () => {
  const dispatch = useDispatch<any>()
  let {id} = useParams()
  console.log(id)
  useEffect(() => {
    if(id){
      dispatch(putAddress(id))
    }
  }, [id])
  const personalPage = useSelector((state: RootState) => state.personalPage)
  useEffect(() => {
    if(personalPage.address){
      dispatch(getPersonalData(personalPage.address))
    }
  }, [personalPage.address])
  return (
    <div className='personal_page'>
      <h1>PERSONAL DATA</h1>
      <div className='info_block_inner'>
        <div className='info_block'>
          <h3>NAME</h3>
          <p>
            {personalPage.username}
          </p>
        </div>
        <div className='info_block'>
          <h3>EMAIL</h3>
          <p>
            {personalPage.email}
          </p>
        </div>
        <div className='info_block'>
          <h3>WALLET</h3>
          <p>
            {personalPage.address}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalPage