import Robot from '../../assets/img/tpartners.png'
import DavKeramika from '../../assets/img/davkeramika.svg'
import CapitalCity from '../../assets/img/capitalcity.png'
import NurseLink from '../../assets/img/nurselink.png'
import Canon from '../../assets/img/canon.png'
import Amazon from '../../assets/img/amazon.png'
import MoneyCat from '../../assets/img/moneycat.svg'
import { useTranslation } from 'react-i18next'


const TimelinePartners = () => {
    const { t } = useTranslation()

    return (
        <div className="tpartners">
            <div className="tpartners__wrapper">
                <div className='tpartners__infoblock'>
                    <h2 className="heading2 tpartners__infoblock_heading">
                        {t('tp_heading')}
                    </h2>
                    <p className='text tpartners__infoblock_text'>
                        {t('tp_text')}
                    </p>
                    <div className='tpartners__partners'>
                        <img className='tpartners__partners_logo' src={DavKeramika} alt="Dav Keramika" />
                        <img className='tpartners__partners_logo' src={CapitalCity} alt="Capital City" />
                        <img className='tpartners__partners_logo' src={NurseLink} alt="Nurse Link" />
                        <img className='tpartners__partners_logo' src={Canon} alt="Canon" />
                        <img className='tpartners__partners_logo' src={Amazon} alt="Amazon" />
                        <img className='tpartners__partners_logo' src={MoneyCat} alt="Money Cat" />
                    </div>
                </div>
                <div className='tpartners__imageblock'>
                    <img src={Robot} alt="unitx robot" />
                </div>
            </div>
        </div>
    )
}

export default TimelinePartners