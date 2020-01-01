import React from 'react'
import { NavLink } from 'react-router-dom'

export const AboutPage: React.FC = () => {

    return (
        <div>
            <h1>Страница информации</h1>
            <p>
                ToDo, написанный на языке программирования TypeScript.
            </p>
            <NavLink to='/todo' className='btn'>Перейти к ToDo</NavLink>
        </div>
    )
}

