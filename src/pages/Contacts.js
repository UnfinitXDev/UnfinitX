import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import ImageWithBackgroundLines from '../components/ImageWithBackgroundLines'
import Robot from '../assets/img/contacts.png'
import { useRef } from "react";

const Contacts = () => {
	const { t } = useTranslation()
	const form = useRef(null)

	const sendEmail = (e) => {
		emailjs.sendForm('service_dzbp593', 'template_bjtgp3g', form.current, 'yqembHztUSQD2C14_')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		reset()
	}

	const { handleSubmit, register, reset } = useForm()

	return (
		<div className="contacts">
			<div className="contacts__wrapper">
				<div className="contacts__left">
					<h1 className="heading contacts__heading">
						{t('contacts_heading')}
					</h1>
					<p className="text contacts__text">
						{t('contacts_text')}
					</p>
					<ImageWithBackgroundLines image={Robot} alt={'UnfinitX robot'} className={'contacts__mobile_img'} />
					<h4 className="contacts__mobile_heading">{t('contacts_mobile_heading')}</h4>
					<form ref={form} onSubmit={handleSubmit(sendEmail)} className="contacts__form">
						<input
							name='name'
							{...register('name', {
								required: t('contacts_name_input_required_error')
							})}
							type="text"
							className="contacts__form_input"
							placeholder={t('contacts_name_input') + ' *'}
						/>
						<input
							name='phone'
							{...register('phone', {
								required: t('contacts_phone_input_required_error'),
								pattern: {
									value: /^\+[0-9]+$/,
									message: t('contacts_phone_input_pattern_error')
								}
							})}
							type="tel"
							className="contacts__form_input"
							placeholder={t('contacts_phone_input') + ' *'}
						/>
						<input
							name="email"
							{...register('email', {
								required: t('contacts_email_input_required_error')
							})}
							type="email"
							className="contacts__form_input"
							placeholder={t('contacts_email_input') + ' *'}
						/>
						<textarea
							name="message"

							{...register('message')}
							className="contacts__form_textarea"
							placeholder={t('contacts_message_input')}
						></textarea>
						<button type="submit" className="primary-btn contacts__form_btn">
							<TelegramIcon />
							{t('contacts_btn')}
						</button>
					</form>
				</div>
				<div className="contacts__right">
					<div className="contacts__right_image">
						<img alt="UnfinitX robot" src={Robot} />
					</div>
					<div className="contacts__infoblock infoblock">
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
		</div>

	)
}

export default Contacts