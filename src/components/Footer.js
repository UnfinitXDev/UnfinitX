import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/img/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<Link to='/' className="footer__logo">
					<img src={Logo} alt="UnfinitX logo" />
				</Link>
				<div className="footer__contacts">
					<div>
						<div className="footer__contacts_address">
							<LocationOnIcon />
							<p>{t('tc_address')}</p>
						</div>
						<div className="footer__contacts_phone">
							<PhoneIcon />
							<a href="tel:+37494969626"> +374 94 96 96 26</a>
						</div>
					</div>
					<div className="footer__menu">
						<NavLink
							to={'/'}
							className='footer__menu_link'
						>
							<span className="footer__prefix"></span>
							{t('home')}
						</NavLink>
						<NavLink
							to={'/portfolio'}
							className='footer__menu_link'
						>
							<span className="footer__prefix"></span>
							{t('portfolio')}
						</NavLink>
						<NavLink
							to={'/services'}
							className='footer__menu_link'>
							<span className="footer__prefix"></span>
							{t('services')}
						</NavLink>
						<NavLink
							to={'/contacts'}
							className='footer__menu_link'
						>
							<span className="footer__prefix"></span>
							{t('contacts')}
						</NavLink>
						<NavLink
							to={'/aboutus'}
							className='footer__menu_link'>
							<span className="footer__prefix"></span>
							{t('aboutus')}
						</NavLink>
					</div>
				</div>
			</div>
			<p className='footer__copyright'>
				{t('tc_copyright')}
			</p>
		</footer>
	)
}

export default Footer