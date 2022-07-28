import React from 'react'
import { TextField } from '@mui/material'
import './navbar.css'

export const Navbar = () => {
    return (
            <nav>
                <div className='logo'>
                    Web_logo
                </div>
                <ul>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
                <div className='search'>
                    <TextField id="standard-basic" label="Search" variant="standard" className='text_field' />
                </div>
            </nav>
    )
}
