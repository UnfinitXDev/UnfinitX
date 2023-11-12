import { useTranslation } from 'react-i18next'
import Robot from '../../assets/img/tos.png'
import { useNavigate } from 'react-router-dom'
import WebIcon from '../../assets/img/web.svg'
import MobileIcon from '../../assets/img/device_icon.svg'
import BagIcon from '../../assets/img/bag_icon.svg'
import DocumentIcon from '../../assets/img/document_icon.svg'
import UXIcon from '../../assets/img/ux_icon.svg'
import MarketingIcon from '../../assets/img/marketing_icon.svg'

const TimelineOurServices = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<div className="tos">
			<h1 className='heading2 tos__heading'>
				{t('tos_heading')}
			</h1>
			<div className='tos__wrapper'>
				<div className='tos__services'>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={WebIcon} alt='Web Icon' />
						<span className='tos__services_line'></span>
						{t('tos_web')}
						<span className='tos__services_line second'></span>
					</p>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={MobileIcon} alt='Mobile Icon' />
						<span className='tos__services_line'></span>
						{t('tos_mobile')}
						<span className='tos__services_line second'></span>
					</p>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={BagIcon} alt='Bag Icon' />
						<span className='tos__services_line'></span>
						{t('tos_site')}
						<span className='tos__services_line second'></span>
					</p>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={DocumentIcon} alt='Document Icon' />
						<span className='tos__services_line'></span>
						{t('tos_landing')}
						<span className='tos__services_line second'></span>
					</p>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={UXIcon} alt='UX Icon' />
						<span className='tos__services_line'></span>
						{t('tos_uiux')}
						<span className='tos__services_line second'></span>
					</p>
					<p className='tos__services_service'>
						<img className='tos__services_icon' src={MarketingIcon} alt='Marketing Icon' />
						<span className='tos__services_line'></span>
						{t('tos_marketing')}
						<span className='tos__services_line second'></span>
					</p>
					<div className='tos__services_shadow'>

					</div>
				</div>
				<div className='tos__imageblock'>
					<img src={Robot} alt='UnfinitX robot' />
				</div>
			</div>

			<div className='tos__infoblock'>
				<h4 className='sub1 tos__infoblock_sub'>
					{t('tos_sub1')}
				</h4>
				<div>
					<p className='text tos__infoblock_text'>
						{t('tos_text')}
					</p>
					<button onClick={() => navigate('/contacts')} className='primary-btn tos__infoblock_btn'>
						{t('tos_btn')}
					</button>
				</div>
			</div>
		</div>
	)


}

export default TimelineOurServices