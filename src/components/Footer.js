import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/img/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Robot from '../assets/img/footer__robot.png'
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__top">
					<Link to='/' className="footer__logo">
						<img src={Logo} alt="UnfinitX logo" />
					</Link>
					<nav className="footer__nav">
						<NavLink
							to={'/'}
							className='footer__nav_link'
						>
							<span className="footer__prefix"></span>
							{t('home')}
						</NavLink>
						<NavLink
							to={'/portfolio'}
							className='footer__nav_link'
						>
							<span className="footer__prefix"></span>
							{t('portfolio')}
						</NavLink>
						<NavLink
							to={'/aboutus'}
							className='footer__nav_link'>
							<span className="footer__prefix"></span>
							{t('aboutus')}
						</NavLink>
						<NavLink
							to={'/contacts'}
							className='footer__nav_link'
						>
							<span className="footer__prefix"></span>
							{t('contacts')}
						</NavLink>
					</nav>
				</div>
				<div className="footer__bottom">
					<div className="footer__robot">
						<img src={Robot} alt="Unfinitx robot" />
					</div>

					<div className="footer__infoblock infoblock">
						<div className="infoblock__item">
							<a href="https://maps.app.goo.gl/D3BoJJgvte9HURDc6" rel="noreferrer" target="_blank" className="infoblock__item_link">
								{t('contacts_address_am')}
								<LocationOnIcon />
							</a> 
							<a
								className="infoblock__item_link"
								href="tel:+37433339616"
							>
								+374 (33) 339616
								<PhoneIcon />
							</a>
						</div>
						<div className="infoblock__item">
							<a href='https://maps.app.goo.gl/6Zp4KN2AArwG1XRV8' rel="noreferrer" target="_blank" className="infoblock__item_link">
								{t('contacts_address_us')}
								<LocationOnIcon />
							</a>
							<a
								className="infoblock__item_link"
								href="tel:+13303031323"
							>
								+1 (330) 3031323
								<PhoneIcon />
							</a>
						</div>
						<div className="infoblock__item">
							<a
								className="infoblock__item_link"
								href="mailto:it@unfinitx.com"
							>
								it@unfinitx.com
								<EmailIcon />
							</a>
						</div>
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