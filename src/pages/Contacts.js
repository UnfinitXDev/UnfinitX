import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import Robot from '../assets/img/contacts.png'
import { useMediaQuery } from "react-responsive";

const Contacts = () => {
	const { t } = useTranslation()
	const { handleSubmit, register } = useForm()
	const onSubmit = data => {
		console.log(data);
	}
	const matches = useMediaQuery({
		query: '(max-width: 992px)'
	})
	return (
		<div className="contacts">
			<h1 className="heading contacts__tablet_heading">
				{t('contacts_heading')}
			</h1>
			<p className="text contacts__tablet_text">
				{t('contacts_text')}
			</p>
			<h1 className="heading contacts__heading">
				{t('contacts_heading')}
			</h1>
			{matches
				? <div className="contacts__mobile_wrapper">
					<div className="contacts__infoblock">
						<div>
							<p className="contacts__infoblock_address">
								{t('contacts_address')}
							</p>
							<LocationOnIcon />
						</div>
						<div>
							<a
								className="contacts__infoblock_link"
								href="mailto:UnfinitXcompany@gmail.com"
							>
								UnfinitXcompany@gmail.com
							</a>
							<EmailIcon />
						</div>
						<div>
							<a
								className="contacts__infoblock_link"
								href="tel:+37494969626"
							>
								+374 94 96 96 26
							</a>
							<PhoneIcon />
						</div>
					</div>
					<div className="contacts__imgtxt">
						<p className="text contacts__imgtxt_text">
							{t('contacts_text')}
						</p>
						<div className="contacts__imgtxt_image">
							<img alt="UnfinitX robot" src={Robot} />
						</div>
					</div>
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
							{t('contacts_btn')}
						</button>
					</form>
				</div>

				: <div className="contacts__wrapper">

					<div className="contacts__left">
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
								{t('contacts_btn')}
							</button>
						</form>
					</div>
					<div className="contacts__right">
						<div className="contacts__right_image">
							<img alt="UnfinitX robot" src={Robot} />
						</div>
						<div className="contacts__infoblock">
							<div>
								<p className="contacts__infoblock_address">
									{t('contacts_address')}
								</p>
								<LocationOnIcon />
							</div>
							<div>
								<a
									className="contacts__infoblock_link"
									href="mailto:UnfinitXcompany@gmail.com"
								>
									UnfinitXcompany@gmail.com
								</a>
								<EmailIcon />
							</div>
							<div>
								<a
									className="contacts__infoblock_link"
									href="tel:+37494969626"
								>
									+374 94 96 96 26
								</a>
								<PhoneIcon />
							</div>
						</div>
					</div>
				</div>}

		</div>
	)
}

export default Contacts