# React Movie App

A React app built with Vite to search and view movies using an external API.

## Features

- Search movies by title
- View movie details (poster, overview, release date, rating)
- Client-side routing with React Router
- Fast development and optimized production builds using Vite

## Tech Stack

- React
- Vite
- JavaScript
- CSS (or Tailwind CSS if used)

## Installation and Usage
## Make an .env file in root folder and Add this VITE_API_KEY=your_api_key_here // Its Important or Else it wont Work

```bash
# Clone the repository
git clone https://github.com/your-username/react-movie-app.git
cd react-movie-app

# Install dependencies
npm install

# Start development server
npm run dev
# Application runs at http://localhost:5173

# Build production bundle
npm run build

# Preview production build
npm run preview

```

## Project Structure
- public/
- src/
- ├── components/   # Reusable components (Search bar, MovieCard, etc.)
- ├── pages/        # Page components (Home, MovieDetail, etc.)
- ├── App.jsx       # App component and route definitions
- └── main.jsx      # Vite entry point
- .gitignore
- package.json
- vite.config.js
- .env
