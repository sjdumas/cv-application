import { useState } from 'react'
import { useEffect } from "react"
import GeneralInfo from "./components/GeneralInfo.jsx"
import EducationInfo from "./components/EducationInfo.jsx"
import ExperienceInfo from "./components/ExperienceInfo.jsx"

function App() {
	useEffect(() => {
		document.title = "CV Application"
	}, []);

	return (
		<>
			<div className="container">
				<h1>CV Application</h1>
				<GeneralInfo />
				<EducationInfo />
				<ExperienceInfo />
			</div>
		</>
	)
}

export default App
