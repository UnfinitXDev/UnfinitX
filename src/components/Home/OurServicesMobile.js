import { useNavigate } from 'react-router-dom'
import Robot from '../../assets/img/tos.png'

import WebIcon from '../../assets/img/web.svg'
import MobileIcon from '../../assets/img/device_icon.svg'
import BagIcon from '../../assets/img/bag_icon.svg'
import DocumentIcon from '../../assets/img/document_icon.svg'
import UXIcon from '../../assets/img/ux_icon.svg'
import MarketingIcon from '../../assets/img/marketing_icon.svg'

import { useTranslation } from "react-i18next"
import ImageWithBackgroundLines from '../ImageWithBackgroundLines'

const OurServicesMobile = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className="tosmobile">
            <h1 className="heading2 tosmobile__heading">
                {t('tos_heading')}
            </h1>

            <div className='tosmobile__services'>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={WebIcon} alt='Web Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_web')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={MobileIcon} alt='Mobile Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_mobile')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={BagIcon} alt='Bag Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_site')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={DocumentIcon} alt='Document Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_landing')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={UXIcon} alt='UX Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_uiux')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_service service'>
                    <img className='service__icon' src={MarketingIcon} alt='Marketing Icon' />
                    <p className='service__name'>
                        <span className='service__name_text'>
                            {t('tos_marketing')}
                        </span>
                    </p>
                </div>
                <div className='tosmobile__services_gradient'>
                </div>
            </div>
            
            <ImageWithBackgroundLines image={Robot} className={'tosmobile__imageblock'} alt={'Unfinitx Robot'} />

            <div className='tosmobile__infoblock'>
                <h4 className='sub1 tosmobile__infoblock_sub'>
                    {t('tos_sub1')}
                </h4>
                <p className='text tosmobile__infoblock_text'>
                    {t('tos_text')}
                </p>
                <button onClick={() => navigate('/contacts')} className='primary-btn tosmobile__infoblock_btn'>
                    {t('tos_btn')}
                </button>
            </div>

        </div>
    )
}

export default OurServicesMobile