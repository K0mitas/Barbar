import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>

          <h1 className='home-h1'>BarBar</h1>

            <div className='home-block-button'>

              <p className='home-block-text'>Приветствую, дорогой пользователь этого веб-приложения! 
                Рад видеть тебя здесь. Цель этой игры — проверить твой словарный запас армянского языка. 
                Суть игры в том, чтобы угадать, как что-то будет называться на армянском языке. 
                Желаю удачной игры!</p>

                <NavLink to="/language">
                   <button className='home-button'>Вдвоём</button>
                </NavLink>

            </div>

    </div>
  )
}
