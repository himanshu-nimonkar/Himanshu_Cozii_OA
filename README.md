# Mars Visit Application - Website

This is a web-based application built to simulate the process of applying for a visit to Mars. The project is designed using **HTML**, **CSS**, and **JavaScript** for a simple yet effective form submission experience.

## Getting Started

Features
This project is a simple Mars visit application form. Below are the key features implemented:

1. Application Form Page (index.html)
Personal Information Section:
Input fields for collecting name, age, gender, and contact details.
These fields are required for submission.

Selection of Travel Experience:
Users can select from a set of checkboxes (e.g., previous space travel experience).
Conditional logic determines if additional questions should be asked based on user input.

Detailed Travel Preferences Section:
Dropdown lists for selecting preferred travel date and preferred Mars destination.
Input fields to describe the applicant’s reason for applying.

User-Friendly Interface:
The form includes visually appealing designs and clear labeling of input fields.

Submit Button:
After the user fills out the form, they can submit it by clicking the "Submit Application" button.
The form data is displayed in a summary format on the next page (form-summary.html).



2. Confirmation Page (form-summary.html)

Display of Submitted Information:
Once the form is submitted, the confirmation page displays a summary of the information the user has provided.
This page includes all personal details, preferences, and any additional information inputted during the form process.

Confirmation Message:
After the user submits the form, they are greeted with a confirmation message thanking them for their application.



3. Additional Features

Mobile Responsiveness:
The website is responsive, ensuring it works well on devices with smaller screens like smartphones and tablets.

Form Validation:
Client-side validation ensures that all required fields are filled before the form can be submitted.

Cross-Browser Compatibility:
The application is tested on modern browsers like Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.




How to Run the Project Locally
1. Clone the Repository:
Open your terminal or command prompt and clone the repository by running:
git clone https://github.com/himanshu-nimonkar/Himanshu_Cozii_OA.git
2. Install Dependencies (if any):
If your project has dependencies (such as if you use a front-end framework like React, Angular, or libraries like Bootstrap), ensure they are installed using:

npm install
# or
yarn install

3. Run the Development Server:
npm run dev
# or
yarn dev
Then navigate to http://localhost:3000 (or another port if specified) to view the application.



Explanation of Code
1. HTML Structure (index.html, form-summary.html):
The HTML structure defines the layout and content of the form pages.
Key sections include:
Form Elements: <input>, <select>, <textarea>, and <button> elements are used to collect user input.
Conditional Display: Elements are shown or hidden dynamically using JavaScript based on the user’s choices.

2. CSS Styling (styles.css):
The project uses custom styles defined in the styles.css file.
The styling includes:
Form Layout: Clean and simple grid layout for aligning form fields.
Color Scheme: A blue and white color scheme to give the form a modern, space-themed appearance.
Responsive Design: Media queries are used to adjust the form layout on smaller screens.

3. JavaScript Functionality (scripts.js):
Form Validation: Ensures all required fields are filled out before submission.
Form Handling: When the user clicks the "Submit" button, their data is captured and displayed on the confirmation page.
Dynamic Changes: Some fields and questions appear based on the user's previous selections.



Project Deployment
Deploying on Vercel:
You can easily deploy this application on Vercel, a platform built for Next.js applications. 

To deploy:
Go to Vercel's Website and sign in.
Click New Project and select your GitHub repository.
Follow the prompts to deploy the project.
For detailed instructions on deploying to Vercel, you can refer to Vercel's Documentation.

Contact Information
For any queries or suggestions, feel free to reach out at:
Email: hcnimonkar@ucdavis.edu
GitHub: himanshu-nimonkar

Changes made from the original template:
Adjusted for Mars visit application project requirements.
Implemented form with dynamic sections based on user input.
Detailed instructions on setup, deployment, and running locally.
