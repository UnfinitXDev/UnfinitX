import { useTranslation } from 'react-i18next'
import Robot from '../../assets/img/tos.png'
import { useNavigate } from 'react-router-dom'

const TimelineOurServices = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<div className="tos">
			<h1 className='heading2 tos__heading'>
				{t('tos_heading')}
			</h1>
			<div className='tos__wrapper'>
				<div className='tos__infoblock'>

					<p className='text tos__infoblock_text'>
						{t('tos_text')}
					</p>
					<button onClick={() => navigate('/contacts')} className='primary-btn tos__infoblock_btn'>
						{t('tos_btn')}
					</button>
				</div>
				<div className='tos__imageblock'>
					<img src={Robot} alt='UnfinitX robot' />
				</div>
			</div>
			<div className='tos__services'>
				<h4 className='sub1 tos__services_sub'>
					{t('tos_sub1')}
				</h4>
				<div className='tos__services_block'>
					<p className='tos__services_service'>
						{t('tos_web')}
					</p>
					<p className='tos__services_service'>
						{t('tos_mobile')}
					</p>
					<p className='tos__services_service'>
						{t('tos_site')}
					</p>
					<p className='tos__services_service'>
						{t('tos_landing')}
					</p>
					<p className='tos__services_service'>
						{t('tos_uiux')}
					</p>
					<p className='tos__services_service'>
						{t('tos_marketing')}
					</p>
				</div>
			</div>
		</div>
	)


}

export default TimelineOurServices