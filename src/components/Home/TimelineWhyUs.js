import { useTranslation } from 'react-i18next'
import Robot from '../../assets/img/twcs.png'

const TimelineWhyChooseUs = () => {
    const { t } = useTranslation()

    return (
        <div className='twcs'>
            <h2 className='heading2 twcs__heading'>
                {t('twcs_heading')}
            </h2>
            <div className='twcs__wrapper'>
                <div className='twcs__infoblock'>
                    <div className='twcs__options'>
                        <div className='twcs__option'>
                            <h4 className='sub2 twcs__option_sub2'>
                                {t('twcs_sub2_1')}
                            </h4>
                            <p className='text twcs__option_text'>
                                {t('twcs_text_1')}
                            </p>
                        </div>
                        <div className='twcs__option'>
                            <h4 className='sub2 twcs__option_sub2'>
                                {t('twcs_sub2_2')}
                            </h4>
                            <p className='text twcs__option_text'>
                                {t('twcs_text_2')}
                            </p>
                        </div>
                        <div className='twcs__option'>
                            <h4 className='sub2 twcs__option_sub2'>
                                {t('twcs_sub2_3')}
                            </h4>
                            <p className='text twcs__option_text'>
                                {t('twcs_text_3')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='twcs__imageblock'>
                    <img src={Robot} alt='UnfinitX robot' />
                </div>
            </div>
        </div>
    )
}

export default TimelineWhyChooseUs