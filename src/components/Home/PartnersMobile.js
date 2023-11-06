import Robot from '../../assets/img/tpartners.png'
import DavKeramika from '../../assets/img/davkeramika.svg'
import CapitalCity from '../../assets/img/capitalcity.png'
import NurseLink from '../../assets/img/nurselink.png'
import Canon from '../../assets/img/canon.png'
import Amazon from '../../assets/img/amazon.png'
import MoneyCat from '../../assets/img/moneycat.svg'
import { useTranslation } from 'react-i18next'

const PartnersMobile = () => {
    const { t } = useTranslation()

    return (
        <div className='partnersmobile'>
            <h2 className="heading2 partnersmobile__heading">
                {t('tp_heading')}
            </h2>
            <div className='partnersmobile__body'>
                <div className='partnersmobile__body_left'>
                    <p className='text partnersmobile__text'>
                        {t('tp_text')}
                    </p>
                    <div className='imageblock'>
                        <img src={Robot} alt="UnfinitX robot" />
                    </div>
                    <div className='partnersmobile__partners'>
                        <div className='partnersmobile__partners_logo'>
                            <img src={DavKeramika} alt="Dav Keramika" />
                        </div>
                        <div className='partnersmobile__partners_logo'>
                            <img src={CapitalCity} alt="Capital City" />
                        </div>
                        <div className='partnersmobile__partners_logo'>
                            <img src={NurseLink} alt="Nurse Link" />
                        </div>
                        <div className='partnersmobile__partners_logo'>
                            <img src={Canon} alt="Canon" />
                        </div>
                        <div className='partnersmobile__partners_logo'>
                            <img src={Amazon} alt="Amazon" />
                        </div>
                        <div className='partnersmobile__partners_logo'>
                            <img src={MoneyCat} alt="Money Cat" />
                        </div>
                    </div>
                </div>
                <div className='partnersmobile__imageblock'>
                    <img src={Robot} alt="UnfinitX robot" />
                </div>
            </div>
        </div>
    )
}

export default PartnersMobile