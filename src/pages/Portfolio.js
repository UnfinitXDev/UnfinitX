import { useTranslation } from "react-i18next"
import { PROJECTS } from "../constants"
import { useEffect, useRef, useState } from "react"

const Portfolio = () => {
	const { t } = useTranslation()
	const [activeTab, setActiveTab] = useState({ id: 1, name: 'all' })
	const [mouseDown, setMouseDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const ref = useRef(null)
	const tabs = [
		{
			id: 1,
			name: 'all'
		},
		{
			id: 2,
			name: 'mobile'
		},
		{
			id: 3,
			name: 'uxui'
		},
		{
			id: 4,
			name: 'marketing'
		},
		{
			id: 5,
			name: 'landing'
		},
		{
			id: 6,
			name: 'ecommerce'
		},
	]

	const handleTabClick = (tab) => {
		if (tab.id !== activeTab.id)
			setActiveTab(tab)
	}
	useEffect(() => {
		const handleMove = (e) => {
			e.preventDefault();
			if (!mouseDown) return;

			const x = e.pageX - ref.current.offsetLeft;
			const scroll = x - startX;
			ref.current.scrollLeft = scrollLeft - scroll;
		};

		const handleUp = () => {
			setMouseDown(false);
			document.removeEventListener('mousemove', handleMove);
			document.removeEventListener('mouseup', handleUp);
		};

		if (mouseDown) {
			document.addEventListener('mousemove', handleMove);
			document.addEventListener('mouseup', handleUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMove);
			document.removeEventListener('mouseup', handleUp);
		};
	}, [mouseDown, ref, startX, scrollLeft]);

	const startDragging = (e) => {
		e.preventDefault();
		setMouseDown(true);
		setStartX(e.pageX - ref.current.offsetLeft);
		setScrollLeft(ref.current.scrollLeft);
	};

	return (
		<div className="portfolio">
			<h1 className="heading portfolio__heading">
				{t('portfolio_heading')}
			</h1>
			<p className="text portfolio__text">
				{t('portfolio_text')}
			</p>
			<div className="portfolio__tabs">
				<div className="portfolio__tabs_menu tabs">
					{
						tabs.map(tab => (
							<div
								key={tab.id}
								className={`tab  ${activeTab.id === tab.id ? 'active' : ''}`}
							>
								<span className="tab__prefix"></span>
								<button
									type="button"
									role="tab"
									className={`tab__btn`}
									onClick={() => handleTabClick(tab)}
								>
									{t(`portfolio_tabs_${tab.name}`)}
								</button>
							</div>
						))
					}
				</div>
				<div
					ref={ref}
					className={`portfolio__tabs_content ${mouseDown ? 'grabbing' : ''}`}
					onMouseDown={startDragging}
					onMouseLeave={() => setMouseDown(false)}
				>
					{PROJECTS[activeTab.name].map(project => (
						<a href="https://www.google.com" key={project.id} className="project">
							{project.image && <img
								className="project__image"
								loading="lazy"
								src={project.image}
								alt={project.name}
							/>}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Portfolio