import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../constants'

const Languages = ({wrapperClassName}) => {
    const {i18n} = useTranslation()
    const changeLanguage = (lng) => {
		localStorage.setItem("i18nextLng", lng);
		i18n.changeLanguage(lng);
	}
    return (
        <div className={`languages ${wrapperClassName ? wrapperClassName : ''}`}>
            {LANGUAGES.map(lng => (
                <button
                    key={lng.code}
                    className={i18n.language === lng.code ? 'languages__btn active' : 'languages__btn'}
                    onClick={() => changeLanguage(lng.code)}
                >
                    {lng.label}
                </button>
            ))}
        </div>
    )
}

export default Languages