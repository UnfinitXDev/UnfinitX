import Robot from '../../assets/img/tpartners.png'
import Partners from '../../assets/img/partners.webp'
import { useTranslation } from 'react-i18next'


const TimelinePartners = () => {
    const { t } = useTranslation()

    return (
        <div className="tpartners">
            <div className="tpartners__wrapper">
                <div className='tpartners__infoblock'>
                    <h2 className="heading2 tpartners__infoblock_heading">
                        {t('tp_heading')}
                    </h2>
                    <p className='text tpartners__infoblock_text'>
                        {t('tp_text')}
                    </p>
                    <div className='tpartners__partners'>
                        <img src={Partners} alt='Partners' />
                    </div>
                </div>
                <div className='tpartners__imageblock'>
                    <img src={Robot} alt="unitx robot" />
                </div>
            </div>
        </div>
    )
}

export default TimelinePartners