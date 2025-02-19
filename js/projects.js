const ProjectCategory = {
	ACADEMIC: "Academic Project",
	HACKATHON: "Hackathon Project",
	PERSONAL: "Personal Project",
	CLIENT: "Client Project"
};

const CategoryColoriser = {
	[ProjectCategory.ACADEMIC]: "primary",
	[ProjectCategory.HACKATHON]: "secondary",
	[ProjectCategory.PERSONAL]: "info",
	[ProjectCategory.CLIENT]: "dark"
};

const CategoryText = {
	[ProjectCategory.ACADEMIC]: "light",
	[ProjectCategory.HACKATHON]: "light",
	[ProjectCategory.PERSONAL]: "dark",
	[ProjectCategory.CLIENT]: "light"
}



const projects = [{
	title: "Vehicle & Area Tracking Systems",
	image: "Assets/Project/images/vehicle_tracking.png",
	shortContent: "Backend systems built for tracking vehicles, areas, and optimizing delivery routes. <span class='text-muted'>see more...</span>",
	description: `<p><strong>Vehicle & Area Tracking Systems</strong> involves the development of backend solutions for efficient tracking and route optimization across multiple client projects.</p><h5>Key Features:</h5><ul><li><strong>Vehicle Tracking:</strong> Real-time tracking of delivery vehicles using GPS data.</li><li><strong>PostGIS Integration:</strong> Utilizes PostGIS to track and store geospatial data of areas and locations.</li><li><strong>Delivery Route Optimization:</strong> Google Maps Matrix API integration to calculate the best routes for delivery vehicles.</li><li><strong>Legacy Code Optimization:</strong> Improved the performance of legacy database queries and models for existing systems.</li></ul><p>This backend solution plays a critical role in improving the efficiency of delivery operations for multiple clients, involving different systems tailored to their specific needs.</p>`,
	links: {},
	stack: ["PostGIS", "Google Maps Matrix API", "Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
	status: "Completed",
	category: ProjectCategory.CLIENT
}, {
	title: "Food For All",
	image: "Assets/Project/images/foodforall/img1.png",
	shortContent: "A platform that connects food donors with NGOs and volunteers to minimize food waste. <span class='text-muted'>see more...</span>",
	description: `
		<p><strong>Food For All</strong> is a web platform built during <em>Fosshack 3</em> to help restaurants and food providers donate surplus food efficiently.</p>
		<h5>Key Features:</h5>
		<ul>
			<li><strong>Seamless Food Donation:</strong> Connects donors with NGOs and volunteers within a 5-10 km radius.</li>
			<li><strong>Real-time Notifications:</strong> Nearby registered NGOs receive instant updates on available food.</li>
			<li><strong>Location-Based Matching:</strong> Uses <strong>PostGIS</strong> to store and process geospatial data.</li>
			<li><strong>REST API Integration:</strong> Ensures smooth communication between frontend (Next.js) and backend (Django).</li>
		</ul>
		<p>Unlike WhatsApp communities where messages often get lost, <em>Food For All</em> provides a structured, centralized solution to food wastage.</p>`,
	links: {
		"bi bi-github": "https://github.com/AkshayBenny/food-surplus-detection"
	},
	stack: ["Django", "Next.js", "REST API", "PostGis"],
	status: "Completed",
	category: ProjectCategory.HACKATHON
}, {
	title: "Explore Bikes",
	image: "Assets/Project/images/explore/exp.png",
	shortContent: "A web platform for scheduling test drives and vehicle maintenance appointments. <span class='text-muted'>see more...</span>",
	description: `
		<p><strong>Explore Bikes</strong> is a vehicle booking and service management platform designed for a local vendor.</p>
		<h5>Key Features:</h5>
		<ul>
			<li><strong>Test Drive Booking:</strong> Users can schedule test drives with ease.</li>
			<li><strong>Service Appointments:</strong> Allows customers to book maintenance services and track service progress.</li>
			<li><strong>Chatbot Assistance:</strong> Basic chatbot integration enables users to make bookings via chat.</li>
		</ul>
		<p>Developed as my final-year academic project using the <strong>Django framework</strong>.</p>`,
	links: {},
	stack: ["Django", "HTML", "CSS", "JavaScript", "SQLite3"],
	status: "Completed",
	category: ProjectCategory.ACADEMIC
}, {
	title: "Urban Nest",
	image: "Assets/Project/images/csd2103/urban_nest.png",
	shortContent: "A JavaScript-based e-commerce platform with dynamic shopping features. <span class='text-muted'>see more...</span>",
	description: `
		<p><strong>Urban Nest</strong> is a fully functional e-commerce website built for my CSD2103 course project.</p>
		<h5>Key Features:</h5>
		<ul>
			<li><strong>Shopping Cart:</strong> Implemented using JavaScript with persistent local storage.</li>
			<li><strong>Category-Based Filtering:</strong> Users can browse products efficiently.</li>
			<li><strong>Dynamic Product Rendering:</strong> Fetches and displays products dynamically.</li>
			<li><strong>Search Functionality:</strong> Helps users find products quickly.</li>
			<li><strong>Session-Based Authentication:</strong> Secure login and authorization system.</li>
		</ul>
		<p><em>Disclaimer: Images used in this project are sourced from various online platforms.</em></p>`,
	links: {
		"bi bi-github": "https://github.com/shaheem-pp/CSD2103-project.git"
	},
	stack: ["JavaScript", "HTML", "Bootstrap", "CSS"],
	status: "Completed",
	category: ProjectCategory.ACADEMIC
}, {
	title: "ReciMe",
	image: "Assets/Project/images/csd4523/img1.png",
	shortContent: "A community-driven recipe-sharing platform built with Django. <span class='text-muted'>see more...</span>",
	description: `
		<p><strong>ReciMe</strong> is a collaborative platform for food lovers, built as part of my CSD4523 course project.</p>
		<h5>Key Features:</h5>
		<ul>
			<li><strong>Discover Recipes:</strong> Browse a diverse collection of step-by-step recipes.</li>
			<li><strong>Create & Share:</strong> Users can upload and share their own recipes.</li>
			<li><strong>Engage with the Community:</strong> Like, bookmark, and review recipes.</li>
			<li><strong>Chef Mode:</strong> A dedicated section for expert chefs to share high-quality content.</li>
		</ul>
		<p>More than just a recipe-sharing site, <em>ReciMe</em> fosters a passionate community for cooking enthusiasts.</p>`,
	links: {
		"bi bi-github": "https://github.com/shaheem-pp/CSD4523-project.git",
		"bi bi-camera-video-fill": "https://youtu.be/PAoJ3Gwr8EI"
	},
	stack: ["Django", "HTML", "Bootstrap", "CSS", "JavaScript", "jQuery", "AJAX", "SQLite3"],
	status: "Completed",
	category: ProjectCategory.ACADEMIC
}];