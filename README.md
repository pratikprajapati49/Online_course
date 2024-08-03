# Online Courses

Online Courses is a React-based web application that showcases a collection of popular courses across various categories. Users can filter courses by category, view course details, and "like" their favorite courses. The app also includes features such as a loading spinner and toast notifications for a smooth user experience.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API](#api)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- View a list of top courses from various categories.
- Filter courses by categories like Development, Business, Design, and Lifestyle.
- Like or unlike courses with real-time feedback using toast notifications.
- Responsive design for an optimal viewing experience on all devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/top-courses.git
   cd top-courses
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Explore the top courses, filter by categories, and like your favorite courses.

## Components
- **Navbar:** Displays the application title.
- **Filter:** Allows users to filter courses by category.
- **Cards:** Displays a grid of course cards based on the selected category.
- **Card:** Represents an individual course with its details and like functionality.
- **Spinner:** Shows a loading animation while data is being fetched.

## API
The application fetches data from the following API:
- **Get Top Courses:** `https://codehelp-apis.vercel.app/api/get-top-courses`

## Technologies
- **React**: Frontend library for building user interfaces.
- **React Icons**: Icons for the like button.
- **React Toastify**: Notifications for user interactions.
- **CSS**: Styling for the components.
- **Fetch API**: Fetching data from the external API.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- React Toastify
- React Icons