# Fake Store - E-commerce Web App

## Overview
This is a simple e-commerce web application built using ReactJS and the Fake Store API. The app allows users to browse products, add them to a shopping cart, update quantities, and view the total price, including a discount. The application provides a smooth and user-friendly experience with a responsive design.

## Features
- Fetch and display a list of products from the Fake Store API.
- Each product includes an image, title, price, and description.
- Responsive layout for better user experience on different devices.
- "Add to Cart" functionality to store products in the shopping cart.
- "Remove from Cart" button for deleting products from the cart.
- Cart page displays:
  - Product name, price, and quantity.
  - Option to increase/decrease quantity.
  - Total price per item based on quantity.
  - Dynamic total price with a 10% discount applied.
- Proper state management to ensure cart updates dynamically.
- Routing using React Router to navigate between the product and cart pages.
- Clean, readable, and well-documented code.

## Tech Stack
- **ReactJS** - For building the user interface.
- **React Router** - For client-side routing.
- **JavaScript** - For interactivity and functionality.
- **HTML/CSS** - For structuring the content.
- **Tailwind CSS** - For styling and responsive design.


## API Usage
The application fetches product data from the [Fake Store API](https://fakestoreapi.com/):
- **GET /products** - Fetches the list of products.

## Project Structure
```
EPRODECT/
│── src/
│   │── components/        # Reusable components (ProductCard, CartItem, etc.)
│   │── pages/             # Main pages (ProductList, Cart)
│   │── App.js             # Main App component with routing
│   │── index.js           # Entry point
│── public/                # Static files
│── package.json           # Project dependencies
│── README.md              # Project documentation


## Usage
1. Browse products on the main page.
2. Click "Add to Cart" to add a product to the shopping cart.
3. Navigate to the Cart page to view selected items.
4. Increase/decrease quantity as needed.
5. View the updated total price and discount.
6. Click "Remove from Cart" to remove an item.

## Author
- Ashwathaman R - Developer

Enjoy shopping with our Fake Store App! 🛒

