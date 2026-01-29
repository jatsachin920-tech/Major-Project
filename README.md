# 🌍 Wanderlust: A Full-Stack Travel Marketplace
Wanderlust is a comprehensive web application designed for travelers and hosts. It allows users to list unique accommodations, explore destinations globally via interactive maps, and share their experiences 
through a robust review system.

# 🛠️ Key Technical Features

# 🔐 Authentication & Authorization
Secure Login/Signup: Implemented using Passport.js with local strategies.

Session Management: Cookies and sessions are handled to keep users logged in across pages.

Permissions: Only the owner of a listing can edit or delete it, ensuring data integrity.

# 🏠 Listing Management (CRUD)
Full CRUD Functionality: Users can Create, Read, Update, and Delete travel listings.

Image Uploads: Powered by Cloudinary API for secure, high-performance image hosting.

Dynamic Pricing: Prices are automatically formatted using Indian Locale settings (en-IN).

# 🗺️ Geocoding & Maps
Mapbox Integration: Converts plain text locations (e.g., "Paris, France") into precise longitude/latitude coordinates.

Interactive Visualization: Every listing features a dedicated map showing its exact location using GeoJSON data.

# 💬 Review System
User Feedback: A 5-star rating system with text comments.

Review Deletion: Integrated logic that removes all associated reviews if a listing is deleted (using Mongoose middleware).

💻 Tech Stack
    Layer                                       Technologies Used
   Frontend                      EJS (Templates), Bootstrap 5, CSS3, JavaScript
   Backend                                   Node.js, Express.js
   Database                                   MongoDB Atlas (Cloud)
  Middleware                           Multer (File uploads), Joi (Schema validation)
    Maps                                          Mapbox GL JS

⚙️ Local Setup Instructions
If you wish to run this project locally, follow these steps:

1. Clone the repository
    git clone https://github.com/jatsachin920-tech/Major-Project.git
    cd Major-Project

2. Install dependencies
  npm install

3. Setup Environment Variables
Create a .env file in the root directory and add your credentials:

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_random_session_secret
MAP_TOKEN=your_mapbox_public_token

4. Initialize the Database
 node init/index.js

5. Start the Application
  nodemon app.js

 📂 Project Structure
 /models - Mongoose schemas for Listings, Reviews, and Users.

/routes - Express router files for clean URL handling.

/views - EJS templates for the UI.

/public - Static assets (CSS, client-side JS, images).

/utils - Custom error handling and validation wrappers.
   
