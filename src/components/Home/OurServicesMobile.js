import { useNavigate } from 'react-router-dom'
import Robot from '../../assets/img/tos.webp'

import WebIcon from '../../assets/img/web.svg'
import MobileIcon from '../../assets/img/device_icon.svg'
import BagIcon from '../../assets/img/bag_icon.svg'
import DocumentIcon from '../../assets/img/document_icon.svg'
import UXIcon from '../../assets/img/ux_icon.svg'
import MarketingIcon from '../../assets/img/marketing_icon.svg'

import { useTranslation } from "react-i18next"
import ImageWithBackgroundLines from '../ImageWithBackgroundLines'
import { SERVICES } from '../../constants'
import { useState } from 'react'
import Modal from '../Services/Modal'

const icons = [WebIcon, MobileIcon, BagIcon, DocumentIcon, UXIcon, MarketingIcon]

const OurServicesMobile = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [activeServiceModal, setActiveServiceModal] = useState(0)
	const activeServiceData = activeServiceModal ? SERVICES.find(service => service.id === activeServiceModal).modalData : null

    return (
        <>
            <div className="tosmobile">
                <h1 className="heading2 tosmobile__heading">
                    {t('tos_heading_mobile')}
                </h1>


                <div className='tosmobile__services'>
                    {SERVICES.map((service, i) => (
                        <button key={service.id} onClick={() => setActiveServiceModal(service.id)} className='tosmobile__services_service service'>
                            <img className='service__icon' src={icons[i]} alt={service.iconAlt} />
                            <p className='service__name'>
                                <span className='service__name_text'>
                                    {t(service.serviceTranslationName)}
                                </span>
                            </p>
                        </button>
                    ))}
                </div>

                <ImageWithBackgroundLines image={Robot} className={'tosmobile__imageblock'} alt={'Unfinitx Robot'} />

                <div className='tosmobile__infoblock'>
                    <p className='sub1 tosmobile__infoblock_sub'>
                        {t('tos_sub1')}
                    </p>
                    <p className='text tosmobile__infoblock_text'>
                        {t('tos_text')}
                    </p>
                    <button onClick={() => navigate('/contacts')} className='primary-btn tosmobile__infoblock_btn'>
                        {t('tos_btn')}
                    </button>
                </div>

            </div>
            {activeServiceData
				&&

				<Modal
					heading={t(activeServiceData.headingTranslationName)}
					cost={activeServiceData.cost}
					text={t(activeServiceData.textTranslationName)}
					close={() => setActiveServiceModal(0)}
				/>}
        </>
    )
}

export default OurServicesMobile