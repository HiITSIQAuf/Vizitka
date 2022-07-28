import React from 'react' 
import Content from '../content/content'
import { Navbar } from '../navbar'
import './header.css'


export const Header = () => {
    return (
        <div className='header'>
          <Navbar/>
          <Content />
        </div>
    )
}
