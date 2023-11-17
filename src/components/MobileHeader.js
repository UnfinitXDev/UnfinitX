import Logo from '../assets/img/mobile_logo.svg'
import BurgerLogo from '../assets/img/logo.svg'
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

    const lines = []
    let initialOpacity = 30
    for (let i=0; i < 6; i++) {
        lines.push(<span style={{opacity: `${initialOpacity}%`}} className='burger__menu_line'></span>)
        initialOpacity -= 5
    }

    return (
        <header className='header'>
            {
                location.pathname === '/'
                    ? <Link className='header__mobile_logo' to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Logo} alt='UnfinitX Logo' />
                    </Link>
                    : <h1 className='heading page__heading'>{t(location.pathname.slice(1) + '_mobile_heading')}</h1>
            }
            <Menu className='burger' right width={'50%'} customBurgerIcon={<MenuIcon />} customCrossIcon={<CloseIcon />}>
                <Link to='/' className='burger__logo'>
                    <img src={BurgerLogo} alt='UnfinitX logo' />
                </Link>
                <div className='burger__menu'>
                    <div className='burger__menu_gradient' data-position='left'></div>

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
                    <div className='burger__menu_lines'>
                        {lines}
                    </div>
                    <div className='burger__menu_gradient' data-position='right'></div>
                </div>
                <Socials />
                <Languages wrapperClassName={'burger-languages'} />
            </Menu>
        </header>
    )
}

export default MobileHeader 