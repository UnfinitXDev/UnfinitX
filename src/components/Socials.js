import React from 'react'
import Linkedin from '../assets/img/linkedin.svg'
import Facebook from '../assets/img/facebook.svg'
import Behance from '../assets/img/Behance.svg'
import Viber from '../assets/img/Viber.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socials = () => {
    return (
        <div className='social'>
            <a
                href='https://t.me/+37433339616'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Telegram"
            >
                <TelegramIcon sx={{ color: 'white' }} />
            </a>
            <a
                href='https://api.whatsapp.com/send?phone=37433339616'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="WhatsApp"
            >
                <WhatsAppIcon sx={{ color: 'white' }}/>
            </a>
            <a
                href='viber://contact?number=%2B37433339616'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Viber"
            >
                <img
                    src={Viber}
                    alt='Viber'
                />

            </a>
            <a
                href='tel:+37433339616'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Phone Call"
            >
                <PhoneIcon sx={{ color: 'white' }} />
            </a>
            <a
                href='https://www.instagram.com/unfinitx'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Instagram"
            >
                <InstagramIcon sx={{ color: 'white' }} />
            </a>
            <a
                href='https://www.linkedin.com/company/UnfinitXitcompany/'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Linkedin"
            >
                <img
                    src={Linkedin}
                    alt='Linkedin logo'
                />
            </a>
            
            <a
                href='https://www.facebook.com/profile.php?id=100089765528347'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Facebook"
            >
                <img
                    src={Facebook}
                    alt='Facebook logo'
                />

            </a>

            <a
                href='https://www.behance.net/Unfinitx'
                target='_blank'
                rel='noreferrer'
                className='social__link'
                aria-label="Behance"
            >
                <img
                    src={Behance}
                    alt='Behance logo'
                />
            </a>
        </div>
    )
}

export default Socials