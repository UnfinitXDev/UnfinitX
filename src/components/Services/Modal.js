import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Modal = ({ heading, text, cost, close }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/contacts')
    }

    return (
        <div className="modal">
            <div onClick={close} className="modal__background"></div>
            <div className="modal__body">
                <button onClick={close} className="modal__close">
                    <CloseIcon />
                </button>
                <h2 className="modal__heading">
                    {heading}
                </h2>
                <p className="modal__text">
                    {text}
                </p>
                <div>
                    <p className="modal__cost">
                        {cost}$
                    </p>
                    <span className="modal__costfrom">
                        {t('services_modal_costfrom')}
                    </span>
                </div>
                <button
                    onClick={() => handleButtonClick()}
                    className="modal__btn primary-btn"
                >
                    {t('services_modal_order')}
                </button>
            </div>
        </div>
    )
}

export default Modal
