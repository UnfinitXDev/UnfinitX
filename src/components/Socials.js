import React from 'react'
import Linkedin from '../assets/img/linkedin.svg'
import Facebook from '../assets/img/facebook.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const Socials = () => {
    return (
        <div className='social'>
            <a
                href='https://www.linkedin.com/company/UnfinitXitcompany/'
                target='_blank'
                rel='noreferrer'
                className='social__link'
            >
                <img
                    src={Linkedin}
                    alt='Linkedin logo'
                />
            </a>
            <a
                href='https://www.instagram.com/_.UnfinitX._/'
                target='_blank'
                rel='noreferrer'
                className='social__link'
            >
                <InstagramIcon sx={{ color: 'white' }} />
            </a>
            <a
                href='https://www.facebook.com/profile.php?id=100089765528347'
                target='_blank'
                rel='noreferrer'
                className='social__link'
            >
                <img
                    src={Facebook}
                    alt='Facebook logo'
                />

            </a>
            <a
                href='tel:+37494969626'
                target='_blank'
                rel='noreferrer'
                className='social__link'
            >
                <PhoneIcon sx={{ color: 'white' }} />
            </a>
        </div>
    )
}

export default Socials