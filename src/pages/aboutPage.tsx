import React from 'react'
import { useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci autem beatae delectus doloribus dolorum excepturi exercitationem facere id nam nemo perspiciatis quisquam quod sed tempore ullam, vitae voluptas voluptate.
            </p>
            <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </div>
    )
}

