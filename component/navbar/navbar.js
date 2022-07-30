import React from 'react'
import { TextField } from '@mui/material'
import { BsTelegram, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <div className='nav_top'>
                <div className='icon_all'>
                <BsTelegram className='icon_sin'/>
                <AiFillInstagram className='icon_sin'/>
                <BsFacebook className='icon_sin'/>
                <AiFillTwitterCircle className='icon_sin'/>
                </div>
                <span>
                    <div className="left">
                        <div className="one"></div>
                        <div className="two"></div>
                    </div>
                    <div className="right">
                        <div className="one"></div>
                        <div className="two"></div>
                    </div>
                </span>
                <div className='search'>
                    <TextField id="standard-basic" label="Search" variant="standard" className='text_field' />
                </div>
            </div>
            
            <div className='nav_bot'>
                <ul>
                    <li>Дом</li>
                    <li>Новая история</li>
                    <li>Портфолио</li>
                    <li>Контакт</li>
                </ul>
            </div>
        </nav>
    )
}
