// Data for achievements
const achievementsData = [{
		title: "Microsoft Learn Student Ambassador",
		role: "Student Ambassador",
		imageUrl: "Assets/image/mlsa.png",
		description: "As a Microsoft Learn Student Ambassador, I organized tech events, workshops, and hackathons to help students build their tech skills and connect with industry professionals.",
		link: "https://studentambassadors.microsoft.com/"
	}, {
		title: "TinkerHub SIAS",
		role: "Founder",
		imageUrl: "Assets/image/thsias.png",
		description: "TinkerHub SIAS was a student community at our campus, affiliated with the TinkerHub Foundation. Our goal was to bring more tech opportunities to a non-engineering college through peer-to-peer learning and networking events.",
		link: "https://tinkerhub.org/"
	},
	{
		title: "TechSIAS",
		role: "Co-Founder",
		imageUrl: "Assets/image/techsias.jpeg",
		description: "TechSIAS is a tech community at Safi College focused on introducing non-technical students to digital tools and technologies, helping them excel in their fields through tech integration.",
		link: "https://sias.edu.in"
	}
];

// Function to generate the achievement cards dynamically
function generateAchievementsCards() {
	const container = document.getElementById('achievements-section');

	achievementsData.forEach(achievement => {
		const achievementCard = document.createElement('div');
		achievementCard.classList.add('achievement-card');

		achievementCard.innerHTML = `
      		<div class="card border-0 rounded-4 h-100 m-0 p-0">
				<div class="card-body p-5 m-0">
          			<div class="bg-light p-3 rounded-4 mb-3 text-center">
            			<img src="${achievement.imageUrl}" alt="${achievement.title}" class="img-fluid" style="height: 5rem; object-fit: contain;">
          			</div>
          			<div class="pt-2 card-text">
            			<p class="mb-2"><strong>${achievement.title}</strong> | ${achievement.role}</p>
            			<p class="small mb-0">
              				${achievement.description}
              				<a href="${achievement.link}" target="_blank" class="text-decoration-none">Learn more</a>
            			</p>
          			</div>
        		</div>
      		</div>
    	`;

		container.appendChild(achievementCard);
	});
}