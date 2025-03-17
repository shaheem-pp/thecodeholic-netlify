const experiences = [{
    date: "Sept 2023 - Jan 2024",
    position: "Backend Developer",
    company: "Agua India",
    location: "Kochi, Kerala, India",
    achievements: [
        "Built and maintained the backend for an app serving 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore.",
        "Optimized order processing and delivery workflows, reducing delivery time by 20% and increasing user satisfaction by 25%.",
        "Developed a vendor dashboard with real-time analytics, improving sales productivity by 40%.",
        "Ensured 99% uptime by promptly resolving issues in Agua Web Panels.",
        "Worked closely with cross-functional teams to deliver high-quality, user-focused applications."
    ]
},
    {
        date: "Aug 2023 - Aug 2024",
        position: "Junior Backend Developer",
        company: "Cynbus",
        location: "Kochi, Kerala, India",
        achievements: [
            "Developed Django-based backend systems and REST APIs for commercial products.",
            "Deployed apps on AWS & DigitalOcean, ensuring scalability and performance.",
            "Built CMS solutions using HTML, CSS, Bootstrap, jQuery, and AJAX to enhance user experience.",
            "Contributed to products impacting 13,000+ users across Kerala, improving engagement."
        ]
    },
    {
        date: "Jun 2021 - Dec 2021",
        position: "Campus Community Manager",
        company: "TinkerHub Foundation",
        location: "Remote, Kerala",
        achievements: [
            "Onboarded 15+ campuses and managed 60+ tech communities across Kerala.",
            "Organized events that increased student engagement by 40% and led to 25% more student-led initiatives.",
            "Mentored 100+ students, helping them build strong campus tech communities."
        ]
    }
];

function renderExperienceCards() {
    const experienceSection = document.getElementById('experience-section');

    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.classList.add('card', 'shadow', 'border-0', 'rounded-4', 'mb-5');

        card.innerHTML = `
      <div class="card-body p-5">
        <div class="row align-items-center gx-5">
          <div class="col text-center text-lg-start mb-4 mb-lg-0">
            <div class="bg-light p-4 rounded-4">
              <div class="text-primary fw-bolder mb-2">${exp.date}</div>
              <div class="small fw-bolder">${exp.position}</div>
              <div class="small text-muted">${exp.company}</div>
              <div class="small text-muted">${exp.location}</div>
            </div>
          </div>
          <div class="col-lg-8">
            <div>
              <ul class="list-unstyled">
                ${exp.achievements.map(ach => `
                  <li><i class="bi bi-check-circle text-success me-2"></i>${ach}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

        experienceSection.appendChild(card);
    });
}