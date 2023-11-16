import { useTranslation } from "react-i18next"
import Robot from '../../assets/img/twcs.png'
import ImageWithBackgroundLines from "../ImageWithBackgroundLines"

const WhyUsMobile = () => {
    const { t } = useTranslation()
    return (
        <div className="wcs">
            <h2 className='heading2 wcs__heading'>
                {t('twcs_heading')}
            </h2>
            <div className="wcs__options">
                <div className='wcs__option'>
                    <h4 className='sub2 wcs__option_sub2'>
                        {t('twcs_sub2_1')}
                    </h4>
                    <p className='text wcs__option_text'>
                        {t('twcs_text_1')}
                    </p>
                </div>
                <div className='wcs__option'>
                    <h4 className='sub2 wcs__option_sub2'>
                        {t('twcs_sub2_2')}
                    </h4>
                    <p className='text wcs__option_text'>
                        {t('twcs_text_2')}
                    </p>
                </div>

                <div className='wcs__option'>
                    <h4 className='sub2 wcs__option_sub2'>
                        {t('twcs_sub2_3')}
                    </h4>
                    <p className='text wcs__option_text'>
                        {t('twcs_text_3')}
                    </p>
                </div>
            </div>
            <ImageWithBackgroundLines image={Robot} alt={'Unfinitx Robot'}/>
        </div>
    )
}

export default WhyUsMobile