import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Robot from '../../assets/img/tos.png'
import WebIcon from '../../assets/img/web.svg'
import MobileIcon from '../../assets/img/device_icon.svg'
import BagIcon from '../../assets/img/bag_icon.svg'
import DocumentIcon from '../../assets/img/document_icon.svg'
import UXIcon from '../../assets/img/ux_icon.svg'
import MarketingIcon from '../../assets/img/marketing_icon.svg'

const icons = [WebIcon, MobileIcon, BagIcon, DocumentIcon, UXIcon, MarketingIcon]
const TimelineOurServices = ({ services, setActiveServiceModal }) => {
	const { t } = useTranslation()
	const navigate = useNavigate()


	return (
		<div className="tos">
			<h1 className='heading2 tos__heading'>
				{t('tos_heading')}
			</h1>
			<div className='tos__wrapper'>
				<div className='tos__services'>
					{services.map((service, i) => (
						<button key={service.id} onClick={() => setActiveServiceModal(service.id)} className='tos__services_service'>
							<img className='tos__services_icon' src={icons[i]} alt={service.iconAlt} />
							<span className='tos__services_line'></span>
							{t(service.serviceTranslationName)}
							<span className='tos__services_line second'></span>
						</button>
					))}
					<div className='tos__services_shadow'>
					</div>
				</div>
				<div className='tos__imageblock'>
					<img src={Robot} alt='UnfinitX robot' />
				</div>
			</div>

			<div className='tos__infoblock'>
				<h5 className='sub1 tos__infoblock_sub'>
					{t('tos_sub1')}
				</h5>
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