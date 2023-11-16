import { useMediaQuery } from "react-responsive"
import Timeline from "../components/Home/Timeline"
import Mobile from "../components/Home/Mobile"

const Home = () => {
	const matches = useMediaQuery({
		query: '(orientation: landscape)'
	})
	
	return matches
		   ? <Timeline />
		   : <Mobile />
	
}

export default Home