/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import './dropdown.css'

function Dropdown(props) {
  const [open, setOpen] = useState(false)

  return (
    <li className='dd-item'>
      <a href='#' className='dd-icon' onClick={() => setOpen(!open)}>
        {!open && props.icon}
        {open && props.altIcon}
      </a>
      {open && (
        <>
          <div className='bg' onClick={() => setOpen(!open)}></div>
          <div className='dropdown'>
            <ul className='dropdown-nav'>
              <DropdownItem onClick={() => setOpen(!open)}>
                Account
              </DropdownItem>
              <DropdownItem onClick={() => setOpen(!open)}>
                History
              </DropdownItem>
              <DropdownItem onClick={() => setOpen(!open)}>About</DropdownItem>
              <DropdownItem onClick={() => setOpen(!open)}>
                Sign Out
              </DropdownItem>
            </ul>
          </div>
        </>
      )}
    </li>
  )
}

export default Dropdown
