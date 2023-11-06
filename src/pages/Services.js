import { useTranslation } from "react-i18next"
import Service from "../components/Services/Service"
import Robot from '../assets/img/services.png'
import Modal from "../components/Services/Modal"
import { useState } from "react"

const services = [
	{
		id: 1,
		serviceTranslationName: 'services_web',
		modalData: {
			headingTranslationName: 'services_web_modal_heading',
			textTranslationName: 'services_web_modal_text',
			cost: '1.000'
		}

	},
	{
		id: 2,
		serviceTranslationName: 'services_mobile',
		modalData: {
			headingTranslationName: 'services_mobile_modal_heading',
			textTranslationName: 'services_mobile_modal_text',
			cost: '2.000'
		}
	},
	{
		id: 3,
		serviceTranslationName: 'services_ecommerce',
		modalData: {
			headingTranslationName: 'services_ecommerce_modal_heading',
			textTranslationName: 'services_ecommerce_modal_text',
			cost: '2.000'
		}
	},
	{
		id: 4,
		serviceTranslationName: 'services_landing',
		modalData: {
			headingTranslationName: 'services_landing_modal_heading',
			textTranslationName: 'services_landing_modal_text',
			cost: '3.000'
		}
	},
	{
		id: 5,
		serviceTranslationName: 'services_uxui',
		modalData: {
			headingTranslationName: 'services_uxui_modal_heading',
			textTranslationName: 'services_uxui_modal_text',
			cost: '1.000'
		}
	},
	{
		id: 6,
		serviceTranslationName: 'services_marketing',
		modalData: {
			headingTranslationName: 'services_marketing_modal_heading',
			textTranslationName: 'services_marketing_modal_text',
			cost: '2.000'
		}
	}
]

const Services = () => {
	const { t } = useTranslation()
	const [activeServiceModal, setActiveServiceModal] = useState(0)
	const activeServiceData = activeServiceModal ? services.find(service => service.id === activeServiceModal).modalData : null
	return (
		<div className="services">
			<h1 className="services__heading heading">
				{t('services_heading')}
			</h1>
			<div className="services__wrapper">
				<div className="services__options ">
					{services.map(service => (
						<Service
							key={service.id}
							data={service}
							id={service.id}
							service={t(service.serviceTranslationName)}
							setActive={setActiveServiceModal}
						/>
					))}
				</div>
				<div className="services__imageblock">
					<img src={Robot} alt="UnfinitX robot" />
				</div>
			</div>

			{activeServiceData
				&&

				<Modal
					heading={t(activeServiceData.headingTranslationName)}
					cost={activeServiceData.cost}
					text={t(activeServiceData.textTranslationName)}
					close={() => setActiveServiceModal(0)}
				/>}
		</div>
	)
}

export default Services