import React from 'react';
import Logo from './demo.png';
import './newhistory.css';

export const NewHistory = () => {
    return (
        <div className='newhistory'>
            <h1>Добро пожаловать В Нашу Веб-Студию</h1>
            <div className='main'>
                <img src={Logo} alt="Logo" />
                <p>
                    Мы очень рады что вы выбрали именно нашу веб-студию.
                    <br /><br />
                    Не много информацы: <br /><br />
                    Наша веб-студия работает уже год.
                    Програмисты опытные со стажом 2 года и качество наших сайтов вышое и слава богу  !!!
                </p>
            </div>
        </div>
    )
}
