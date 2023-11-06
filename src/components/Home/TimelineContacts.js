import { useTranslation } from 'react-i18next'
import UnfinitX from '../../assets/img/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const TimelineContacts = () => {
    const { t } = useTranslation()
    return (
        <div className='tcontacts'>
            <img src={UnfinitX} className='tcontacts__logo' alt='UnfinitX logo' />

            <div className='tcontacts__infoblock'>
                <h2 className='tcontacts__infoblock_heading'>
                    {t('tc_heading')}
                </h2>
                <p className='tcontacts__infoblock_text'>
                    {t('tc_text')}
                </p>
                <button className='primary-btn tcontacts__infoblock_btn'>
                    {t('tc_btn')}
                </button>
            </div>

            <div className='tcontacts__option'>
                <LocationOnIcon />
                <p className='tcontacts__option_address'>{t('tc_address')}</p>
            </div>
            <div className='tcontacts__option'>
                <PhoneIcon />
                <a
                    className='tcontacts__option_phone'
                    href='tel:+37494969626'
                >
                    +374 94 96 96 26
                </a>
            </div>

            <p className='tcontacts__copyright'>
                {t('tc_copyright')}
            </p>
        </div>
    )
}

export default TimelineContacts