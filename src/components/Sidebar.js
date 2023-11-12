import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import Logo from '../assets/img/logo.svg'
import Socials from './Socials';
import Languages from './Languages';


const Sidebar = () => {
	const { t } = useTranslation();

	return (
		<aside className='sidebar'>
			<div className='sidebar__wrapper'>
				<NavLink to={'/'} className='sidebar__logo'>
					<img
						className='sidebar__logo_img'
						src={Logo}
						alt='UnfinitX Logo'
					/>
				</NavLink>

				<nav className='sidebar__menu'>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive ? "sidebar__menu_link active" : "sidebar__menu_link"
						}
					>
						{t('home')}
					</NavLink>
					<NavLink
						to={'/aboutus'}
						className={({ isActive }) =>
							isActive ? "sidebar__menu_link active" : "sidebar__menu_link"
						}>
						{t('aboutus')}
					</NavLink>
					<NavLink
						to={'/portfolio'}
						className={({ isActive }) =>
							isActive ? "sidebar__menu_link active" : "sidebar__menu_link"
						}
					>
						{t('portfolio')}
					</NavLink>
					<NavLink
						to={'/contacts'}
						className={({ isActive }) =>
							isActive ? "sidebar__menu_link active" : "sidebar__menu_link"
						}
					>
						{t('contacts')}
					</NavLink>
				</nav>
				<Socials />

				<Languages />
			</div>
		</aside>
	)
}

export default Sidebar