var typed = new Typed('#element', {
    strings: ['I am a Web Developer','Front-End Developer'],
    typeSpeed: 70,
  });

  // Array of project objects
const projects = [
    {
        title: "Project One",
        description: "This is a brief description of Project One.",
        link: "https://github.com/nirmaltech/rock-paper_gameproject-one",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ensure you have this image or update the path
    },
    {
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        link: "https://github.com/nirmaltech/weather_appproject-two",
        image: "https://plus.unsplash.com/premium_photo-1677744408402-6c198d22d528?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ensure you have this image or update the path
    },
    {
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        link: "https://github.com/nirmaltech/calculatorproject-three",
        image: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ensure you have this image or update the path
    }
];

// Function to render projects
function renderProjects() {
    const container = document.getElementById('projects-container');

    projects.forEach(project => {
        // Create project card
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Add project image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        card.appendChild(img);

        // Add project content
        const content = document.createElement('div');
        content.classList.add('project-card-content');

        const title = document.createElement('h3');
        title.textContent = project.title;
        content.appendChild(title);

        const description = document.createElement('p');
        description.textContent = project.description;
        content.appendChild(description);

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'View Project';
        link.target = '_blank';
        content.appendChild(link);

        card.appendChild(content);

        // Append card to container
        container.appendChild(card);
    });
}

// Call the function to render projects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        // Perform form validation (basic example)
        if (name && email && message) {
            // In a real-world scenario, you would send these values to a server
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.color = '#28a745'; // Green color for success message

            // Clear form fields
            form.reset();
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = '#dc3545'; // Red color for error message
        }
    });
});


