import Robot from '../../assets/img/tpartners.webp'
import ImageWithBackgroundLines from '../ImageWithBackgroundLines'
import { useTranslation } from 'react-i18next'
import Partners from '../../assets/img/partners.webp'
const PartnersMobile = () => {
    const { t } = useTranslation()

    return (
        <div className='partnersmobile'>
            <h2 className="heading2 partnersmobile__heading">
                {t('tp_heading')}
            </h2>
            <p className='text partnersmobile__text'>
                {t('tp_text')}
            </p>
            <ImageWithBackgroundLines image={Robot} alt="UnfinitX robot" className={'partnersmobile__imageblock'}/>
            <div className='partnersmobile__partners'>
                <img src={Partners} alt='Partners' />
            </div>
        </div>
    )
}

export default PartnersMobile