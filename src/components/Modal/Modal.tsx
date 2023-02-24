import { Dialog, DialogContent, DialogTitle} from '@mui/material'
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeModalIsOpen } from '../../redux/ParticipantsData/ParticipantsSlice'
import { RootState } from '../../redux/store'
import './Modal.css'
const Modal = () => {
  const dispatch = useDispatch()
  const {modalIsOpen} = useSelector((state:RootState) => state.participiantsData)
  const handleClose = () => {
    dispatch(changeModalIsOpen(false))
  }
  return (
    <div>
      <Dialog className='dialog_container' onClose={handleClose} open={modalIsOpen}>
        <DialogTitle className='dialog_title'>METAMASK EXTENTION</DialogTitle>
        <DialogContent>To work with our application, you have to install the <a className='metamask_link' href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related">Metamask browser extension</a></DialogContent>
        <button onClick={() => handleClose()} className='skip_button'>
          SKIP THIS STEP
        </button>
      </Dialog>    
    </div>
  )
}

export default Modal