# Journey Through Time

Journey Through Time is a comprehensive website that offers a timeline of all eras in human history, along with their different periods. It provides a user-friendly interface for exploring and learning about various historical periods.

## Project Overview

Journey Through Time aims to provide an interactive and educational experience for users interested in history. The website offers a visual representation of the timeline of human history, allowing users to navigate through different eras and explore detailed information about each period.

Users can also contribute to the timeline by adding new periods through a simple form. This feature enhances the collaborative aspect of the platform, allowing users to share their knowledge and contribute to the enrichment of historical data.

## Tech Stack

### Frontend

- **React:** Utilized for building the user interface and managing component-based architecture.
- **React Hook Form:** Used for form handling to simplify the process of adding new periods to the timeline.
- **React Router DOM:** Implemented for navigation between different pages and sections of the website.
- **Redux:** Employed for global state management, ensuring efficient data flow and synchronization across components.
- **React Query:** Used for handling fetch requests and managing data fetching and caching in the frontend.
- **TypeScript:** Implemented for type safety and improved code quality, providing a robust development environment.

### Backend

- **Express.js:** Utilized as the backend framework for building the server-side logic and RESTful APIs.
- **MongoDB:** Chosen as the database for storing historical data and user-contributed content.
- **Multer:** Integrated for handling photo uploads, allowing users to add images to their contributed periods.
- **Cloudinary:** Used for storing and managing images uploaded by users, providing a scalable solution for image storage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/journey-through-time.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd journey-through-time
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add necessary environment variables (e.g., MongoDB URI, Cloudinary credentials).

4. Run the development server:

   ```bash
   cd client && npm run dev
   cd ../server && npm run dev
   ```

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).
