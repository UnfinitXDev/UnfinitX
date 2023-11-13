import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import TeamImage from '../assets/img/aboutus.png'

const AboutUs = () => {
	const { t } = useTranslation()
	const createText = () => ({ __html: t('aboutus__text').replace(/(?:\r\n|\r|\n)/g, "<br />") })
	const navigate = useNavigate()

	const handleButtonClick = () => {
		navigate('/contacts')
	}
	return (
		<div className="aboutus">
			<h1 className="heading aboutus__heading">
				{t('aboutus__heading')}
			</h1>
			<div className="aboutus__wrapper">
				<div className="aboutus__infoblock">
					<h2 className="heading2 aboutus__infoblock_subheading">
						{t('aboutus__subheading')}
					</h2>
					<p dangerouslySetInnerHTML={createText()} className="text aboutus__infoblock_text">
					</p>
					<button
						onClick={() => handleButtonClick()}
						className="primary-btn aboutus__infoblock_btn"
					>
						{t('aboutus__btn')}
					</button>
				</div>
				<div className="aboutus__imageblock">
					<img src={TeamImage} alt="Team" />
				</div>


				<div className="aboutus__customer">
					<h2 className="heading2 aboutus__customer_heading2">
						{t('aboutus_mobile_customer_heading')}
					</h2>
					<p className="aboutus__customer_point">
						1. {t('aboutus_mobile_customer1')}
					</p>
					<p className="aboutus__customer_point">
						2. {t('aboutus_mobile_customer2')}
					</p>
					<p className="aboutus__customer_point">
						3. {t('aboutus_mobile_customer3')}
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUs