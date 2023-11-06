import { useNavigate } from 'react-router-dom'
import Robot from '../../assets/img/tos.png'

import { useTranslation } from "react-i18next"

const OurServicesMobile = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className="tosmobile">
            <h1 className="heading2 tosmobile__heading">
                {t('tos_heading')}
            </h1>
            <p className='text tosmobile__text'>
                {t('tos_text')}
            </p>
            <div className='tosmobile__imageblock'>
                <img src={Robot} alt='UnfinitX robot' />
            </div>
            <button onClick={() => navigate('/contacts')} className='primary-btn tosmobile__btn'>
                {t('tos_btn')}
            </button>
        </div>
    )
}

export default OurServicesMobile