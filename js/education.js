// Array to hold education data
const educationData = [{
    duration: "2024 - Present",
    institution: "Lambton College",
    location: "Toronto, ON",
    degree: "Post Graduation",
    fieldOfStudy: "Full Stack Software Development",
    gpa: "3.35",
    highlights: [
        "Enhancing expertise in full-stack web development, specializing in Django, React, REST APIs, and Cloud Computing.",
        "Building scalable web applications and exploring software architecture best practices."
    ]
},
    {
        duration: "2019 - 2022",
        institution: "Safi Institute of Advanced Study",
        location: "Kerala, India",
        degree: "Bachelor's",
        fieldOfStudy: "Computer Application (BCA)",
        gpa: "",
        highlights: [
            "Developed a solid foundation in Data Structures, Algorithms, Networking, Web Development, and Machine Learning.",
            "Proficiency in C, Python, and Java.",
            "Co-founded TinkerHub SIAS and TechSIAS, bridging academia and industry.",
            "Contributed to the Innovation Entrepreneurship Development Centre (IEDC) and volunteered with NSS.",
            "Organized tech events as a Microsoft Learn Student Ambassador and managed community outreach for Pygrammers."
        ]
    }
];

// Function to generate the education cards dynamically
function generateEducationCards() {
    const container = document.getElementById('education-cards');
    educationData.forEach(edu => {
        const card = document.createElement('div');
        card.classList.add('card', 'shadow', 'border-0', 'rounded-4', 'mb-5');

        card.innerHTML = `
      <div class="card-body p-5">
        <div class="row align-items-center gx-5">
          <div class="col text-center text-lg-start mb-4 mb-lg-0">
            <div class="bg-light p-4 rounded-4">
              <div class="text-secondary fw-bolder mb-2">${edu.duration}</div>
              <div class="mb-2">
                <div class="small fw-bolder">${edu.institution}</div>
                <div class="small text-muted">${edu.location}</div>
              </div>
              <div class="fst-italic">
                <div class="small text-muted">${edu.degree}</div>
                <div class="small text-muted">${edu.fieldOfStudy}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div>
              <ul class="list-unstyled">
                ${edu.gpa ? `<li><i class="bi bi-check-circle text-success me-2"></i>GPA: <strong>${edu.gpa}</strong></li>` : ''}
                ${edu.highlights.map(highlight => `
                  <li><i class="bi bi-check-circle text-success me-2"></i>${highlight}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

        container.appendChild(card);
    });
}