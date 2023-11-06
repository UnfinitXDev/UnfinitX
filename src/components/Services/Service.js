import { useMediaQuery } from "react-responsive"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Service = ({ service, id, setActive }) => {
    const matches = useMediaQuery({
        query: '(max-width: 992px)'
    })
    return (
        <button onClick={() => setActive(id)} className="services__options_service">
            {service}
            {matches && <ArrowRightIcon />}
        </button>
    )
}

export default Service