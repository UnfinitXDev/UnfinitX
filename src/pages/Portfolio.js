import { useTranslation } from "react-i18next"
import { Projects } from "../constants"
import { useState } from "react"
import { useHorizontalScroll } from "../services/useHorizontalScroll"

const Portfolio = () => {
	const { t } = useTranslation()
	const [activeTab, setActiveTab] = useState({ id: 1, name: 'all' })
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
		// {
		// 	id: 4,
		// 	name: 'marketing'
		// },
		{
			id: 5,
			name: 'landing'
		},
		{
			id: 6,
			name: 'ecommerce'
		},
	]
	const scrollRef = useHorizontalScroll();

	const handleTabClick = (tab) => {
		if (tab.id !== activeTab.id)
			setActiveTab(tab)
	}

	return (
		<div className="portfolio">
			<h1 className="heading portfolio__heading">
				{t('portfolio_heading')}
			</h1>
			<div className="portfolio__tabs">
				<div className="portfolio__tabs_menu tabs">
					{
						tabs.map(tab => (
							<div
								key={tab.id}
								className={`tab${activeTab.id === tab.id ? ' active' : ''}`}
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
					ref={scrollRef}
					className={`portfolio__tabs_content`}
				>
					{/* {PROJECTS[activeTab.name].map(project => (
						<a href="https://www.behance.net/Unfinitx" rel="noreferrer" target="_blank" key={project.id} className="project">
							{project.image && <img
								className="project__image"
								loading="lazy"
								src={project.image}
								alt={project.name}
							/>}
						</a>
					))} */}
					{Projects.map(project => {
						console.log(project, 'project')
						console.log(activeTab, 'activeTab')

						if (project.types.includes(activeTab.name) || activeTab.name === 'all') {
							return (
								<a href={project.link} rel="noreferrer" target="_blank" key={project.id} className="project">
									{project.image && <img
										className="project__image"
										loading="lazy"
										src={project.image}
										alt={project.name}
									/>}
								</a>
							)
						}
						return null;
					})}
				</div>
			</div>
		</div>
	)
}

export default Portfolio