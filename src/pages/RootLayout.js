import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useMediaQuery } from "react-responsive"
import MobileHeader from "../components/MobileHeader"
import Footer from '../components/Footer'
const RootLayout = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 993px)'
	})

	return <div className="gen-wrapper">
		{isDesktopOrLaptop
			?
			<Sidebar />
			: <MobileHeader />
		}
		<Outlet />
		{!isDesktopOrLaptop && <Footer />}

	</div >


}

export default RootLayout