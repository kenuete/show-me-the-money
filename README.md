# Show Me The Money

This solution can be run in two ways:  
1. **Using Docker** (Recommended)  
2. **Running everything independently**  

## 🚀 Running with Docker  
1. **Clone the repository**  
2. **Start all services using Docker Compose**  
   > docker-compose up --build
   
3. **Open the application** in your browser:  
   👉 [http://localhost:3001/](http://localhost:3001/)

---

## 🛠 Running Independently  
Follow these steps if you prefer to run each service manually:

1. **Clone the repository**  

2. **Install dependencies**  
   yarn install


3. **Start the Xero mock API**  
   docker run -p 3000:3000 jaypeng2015/show-me-the-money

4. **Start the backend server**  
   yarn dev:server

5. **Start the frontend app**  
   yarn dev

Now, open [http://localhost:3001/](http://localhost:3001/) in your browser to use the app.