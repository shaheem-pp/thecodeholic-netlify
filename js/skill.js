const skillsData = [{
		category: "Backend Development",
		icon: "bi bi-code-slash",
		skills: [
			"Django",
			"REST APIs",
			"Python",
			"Server-Side Logic"
		]
	},
	{
		category: "Frontend Development",
		icon: "bi bi-laptop",
		skills: [
			"React.js",
			"HTML/CSS",
			"Bootstrap",
			"JavaScript"
		]
	},
	{
		category: "Database Management",
		icon: "bi bi-database",
		skills: [
			"PostgreSQL",
			"PostGIS",
			"SQL Optimization"
		]
	},
	{
		category: "DevOps & Cloud Infrastructure",
		icon: "bi bi-cloud",
		skills: [
			"AWS",
			"DigitalOcean",
			"Docker",
			"CI/CD"
		]
	},
	{
		category: "Leadership & Mentorship",
		icon: "bi bi-person-circle",
		skills: [
			"Leadership",
			"Mentoring",
			"Team Collaboration"
		]
	},
	{
		category: "Problem-Solving & Communication",
		icon: "bi bi-lightbulb-fill",
		skills: [
			"Adaptability",
			"Time Management",
			"Problem-Solving"
		]
	}
];


// Function to generate the skills cards dynamically
function generateSkillsCards() {
	const container = document.getElementById('skills-section');

	skillsData.forEach(skillCategory => {
		const skillCard = document.createElement('div');
		skillCard.classList.add('card', 'shadow', 'border-0', 'rounded-4', 'mb-5');

		skillCard.innerHTML = `
			<div class="card-body p-5 m-0">
				<div style="
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							align-content: center;
							justify-content: flex-start;
							align-items: center;
				">
					<div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
						<i class="${skillCategory.icon}"></i>
					</div>
					<h5>${skillCategory.category}</h5>
				</div>
				<div class="row">
					${skillCategory.skills.map(skill => `
						<div class="col col-md-4 p-2">
							<div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
								${skill}
							</div>
						</div>
					`).join('')}
				</div>
			</div>
    	`;

		container.appendChild(skillCard);
	});
}

//   <div class="card-body p-5">
//     <div class="row align-items-center gx-5">
//       <div class="d-flex align-items-center p-2">
//         <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
//           <i class="${skillCategory.icon}"></i>
//         </div>
//         <h5 class="mb-0">${skillCategory.category}</h5>
//       </div>

//       <div class="row row-cols-1 row-cols-md-3 p-2">
//         ${skillCategory.skills.map(skill => `
//           <div class="col">
//             <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${skill}</div>
//           </div>
//         `).join('')}
//       </div>
//     </div>
//   </div>