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

function generateSkillsCards() {
	const container = document.getElementById('skills-section');

	container.innerHTML = `
		<div class="swiper">
			<div class="swiper-wrapper"></div>
			<div class="swiper-pagination"></div>
		</div>
	`;

	const swiperEl = container.querySelector('.swiper');
	const wrapper = swiperEl.querySelector('.swiper-wrapper');

	skillsData.forEach(skillCategory => {
		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');
		slide.innerHTML = `
			<div class="card border-0 rounded-4 h-100 m-0 p-0 skill-card" style="width: 300px;">
				<div class="card-body p-5 m-0">
					<div class="d-flex align-items-center p-2 flex-nowrap">
						<div class="skill-icon bg-primary bg-gradient-primary-to-secondary text-white rounded-3 p-2 m-1">
							<i class="${skillCategory.icon}"></i>
						</div>
						<h5>${skillCategory.category}</h5>
					</div>
					<div class="row">
						${skillCategory.skills.map(skill => `
							<div class="col-12 p-2">
								<div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
									${skill}
								</div>
							</div>
						`).join('')}
					</div>
				</div>
			</div>
		`;
		wrapper.appendChild(slide);
	});

	new Swiper(swiperEl, {
		slidesPerView: 'auto', // Use auto instead of fixed numbers
		centeredSlides: false,
		spaceBetween: 20,
		freeMode: {
			enabled: true,
			sticky: false, // Disable sticky free mode
			momentumBounce: false,
		},
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 'auto',
				spaceBetween: 25
			},
			1024: {
				slidesPerView: 'auto',
				spaceBetween: 30
			}
		},
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		// Add these observer properties
		observer: true,
		observeParents: true,
		// Enable edge resistance
		resistance: true,
		resistanceRatio: 0.5
	});
}