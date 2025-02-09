# Show Me The Money

The app consists of a backend built with Express.js and a frontend built with React and Vite.

This solution can be run in two ways:  
1. **Using Docker**  
2. **Running everything independently**  

## 🚀 Running with Docker  
1. **Clone the repository**  
2. **Start all services using Docker Compose**  
   > docker-compose up --build
   
3. **Open the application** in your browser:  
   👉 [http://localhost:3001/](http://localhost:3001/)

---

## 🛠 Running Independently  
Follow these steps to run each service manually:

1. **Clone the repository**  

2. **Install dependencies**  
   > yarn install


3. **Start the Xero mock API**  
   > docker run -p 3000:3000 jaypeng2015/show-me-the-money

4. **Start the backend server**  
   > yarn dev:server

5. **Start the frontend app**  
   > yarn dev

6. **To run tests**
   > yarn test

Open [http://localhost:5173/](http://localhost:5173/) in your browser to use the app.

## Tech Stack

1. **Frontend**: React, Vite, TypeScript, Styled Components
2. **Backend**: Node.js, Express.js, TypeScript
3. **Containerization**: Docker, Docker Compose, nginx

## Notes
The project structure could be further refined. The frontend code is inside the src directory and the backend is in the server directory. Due to time constraints and the need to set up a local development environment quickly, some configurations were done on the fly. I enjoyed working on this challenge!
