import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

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
			<h2 className="heading2 aboutus__tablet_subheading">
				{t('aboutus__subheading')}
			</h2>
			<div className="aboutus__wrapper">
				<div className="aboutus__infoblock">
					<h2 className="heading2 aboutus__infoblock_subheading">
						{t('aboutus__subheading')}
					</h2>
					<p dangerouslySetInnerHTML={createText()} className="text aboutus__infoblock_text">
					</p>
					<div className="video mobile">
						<div className="video-responsive">
							<iframe
								width="760"
								height="450"
								src={'https://www.youtube.com/embed/Giewsnm3vog'}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Embedded youtube"
							/>
						</div>
					</div>
					<button
						onClick={() => handleButtonClick()}
						className="primary-btn aboutus__infoblock_btn"
					>
						{t('aboutus__btn')}
					</button>
				</div>
				<div className="video">
					<div className="video-responsive">
						<iframe
							width="760"
							height="450"
							src={'https://www.youtube.com/embed/Giewsnm3vog'}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
						/>
					</div>
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
			<button
				onClick={() => handleButtonClick()}
				className="primary-btn aboutus__tablet_btn"
			>
				{t('aboutus__btn')}
			</button>
		</div>
	)
}

export default AboutUs