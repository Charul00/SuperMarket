# SuperMarket

Welcome to the SuperMarket project! This web application is designed to provide a user-friendly platform for managing a supermarket's inventory and sales. Users can browse products, add items to their cart, and make purchases seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login and signup)
- Product listing with detailed descriptions
- Add/remove products from the shopping cart
- Secure checkout process
- Admin panel for managing products and orders
- Responsive design for mobile and desktop users

## Technologies Used

- **Frontend:** React, Redux, Bootstrap/Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** [Platform name (e.g., Heroku, Vercel, etc.)]

## Installation

To run the SuperMarket project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Charul00/SuperMarket.git
   cd SuperMarket
   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the backend directory and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

Your application should now be running on `http://localhost:3000` (or another port if specified).

## Usage

1. **User Registration**: Navigate to the signup page and create a new account.
2. **Login**: Access your account using the login page.
3. **Browse Products**: View available products and add them to your cart.
4. **Checkout**: Proceed to checkout and complete your purchase.





