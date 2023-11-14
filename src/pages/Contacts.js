import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';

import Robot from '../assets/img/contacts.png'

const Contacts = () => {
	const { t } = useTranslation()
	const { handleSubmit, register } = useForm()
	const onSubmit = data => {
		console.log(data);
	}

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
					<form onSubmit={handleSubmit(onSubmit)} className="contacts__form">
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
							name='phoneNumber'
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
							<TelegramIcon sx={{ fontSize: '1.25vw', height: '1.25vw', width: '1.25vw' }} />
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
							<p className="infoblock__item_address">
								{t('contacts_address_am')}
								<LocationOnIcon />
							</p>
							<a
								className="infoblock__item_link"
								href="tel:+37433339616"
							>
								+374 (33) 339616
								<PhoneIcon />
							</a>
						</div>
						<div className="infoblock__item">
							<p className="infoblock__item_address">
								{t('contacts_address_us')}
								<LocationOnIcon />
							</p>
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