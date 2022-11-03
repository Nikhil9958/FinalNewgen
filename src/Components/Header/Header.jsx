import React from 'react'
import './Header.css'
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  return (
    <div className='header-bg'>
      <h3 className='header-text'>Results</h3>
    <CloseIcon className='closeIcon' />
    </div>
  )
}

export default Header
