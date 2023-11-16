import Logo from '../assets/img/mobile_logo.svg'

import { slide as Menu } from 'react-burger-menu'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import Socials from './Socials';
import Languages from './Languages';

const MobileHeader = () => {
    const { t } = useTranslation();
    const location = useLocation()

    return (
        <header className='header'>

            {
                location.pathname === '/'
                ?   <Link className='header__mobile_logo' to={'/'} style={{display: 'flex', alignItems: 'center'}}>
                        <img src={Logo} alt='UnfinitX Logo' />
                    </Link>
                : <h1 className='heading page__heading'>{t(location.pathname.slice(1) + '_mobile_heading')}</h1>
            }
            <Menu className='burger'  right width={240} customBurgerIcon={<MenuIcon />} customCrossIcon={<CloseIcon />}>
                <Link to='/' className='burger__logo'>
                    <img src={Logo} alt='UnfinitX logo' />
                </Link>
                <div className='burger__menu'>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                            isActive ? "burger__menu_link active" : "burger__menu_link"
                        }
                    >
                        <span className="burger__prefix"></span>
                        {t('home')}
                    </NavLink>

                    <NavLink
                        to={'/services'}
                        className={({ isActive }) =>
                            isActive ? "burger__menu_link active" : "burger__menu_link"
                        }>
                        <span className="burger__prefix"></span>
                        {t('services')}
                    </NavLink>

                    <NavLink
                        to={'/aboutus'}
                        className={({ isActive }) =>
                            isActive ? "burger__menu_link active" : "burger__menu_link"
                        }>
                        <span className="burger__prefix"></span>
                        {t('aboutus')}
                    </NavLink>
                    <NavLink
                        to={'/portfolio'}
                        className={({ isActive }) =>
                            isActive ? "burger__menu_link active" : "burger__menu_link"
                        }
                    >
                        <span className="burger__prefix"></span>
                        {t('portfolio')}
                    </NavLink>
                    <NavLink
                        to={'/contacts'}
                        className={({ isActive }) =>
                            isActive ? "burger__menu_link active" : "burger__menu_link"
                        }
                    >
                        <span className="burger__prefix"></span>
                        {t('contacts')}
                    </NavLink>


                </div>
                <Socials />
                <Languages wrapperClassName={'burger-languages'} />
            </Menu>
        </header>
    )
}

export default MobileHeader 