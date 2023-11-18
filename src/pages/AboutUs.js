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
				<button
					onClick={() => handleButtonClick()}
					className="primary-btn aboutus__btn"
				>
					{t('aboutus__btn')}
				</button>
			</div>
		</div>
	)
}

export default AboutUs