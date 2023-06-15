# Kim Shop API - README

This README provides a brief overview of the Kim Shop API and its endpoints. The API allows users to manage user authentication, menu items, orders, shopping carts, and payments for an online shop.

# Due to the Azure account issue, I no longer pay for the monthly fee (over 100$), so the link might not be able to be open.

Web Link: https://frozengem397.github.io/KimFood/
API Link: https://kimshopapi.azurewebsites.net/index.html
<img width="567" alt="Screenshot 2023-06-15 at 9 57 11 AM" src="https://github.com/frozengem397/Food_Menu/assets/77391202/3eea90a9-4f62-4529-8014-6e063e8eaf47">

## Authentication

- **Register a user**: `POST /api/auth/register`
  - Register a new user by providing the necessary user details.
- **User login**: `POST /api/auth/login`
  - Authenticate a user by providing their username and password.

## Menu Items

- **Get all menu items**: `GET /api/MenuItem`
  - Retrieve a list of all available menu items.
- **Create a menu item**: `POST /api/MenuItem`
  - Add a new menu item by providing its name, description, special tag, category, price, and an optional file attachment.
- **Get a menu item by ID**: `GET /api/MenuItem/{id}`
  - Retrieve a specific menu item by its unique ID.
- **Update a menu item**: `PUT /api/MenuItem/{id}`
  - Update an existing menu item by providing its ID and the updated details.
- **Delete a menu item**: `DELETE /api/MenuItem/{id}`
  - Delete a menu item from the system by specifying its ID.

## Orders

- **Get all orders**: `GET /api/Order`
  - Retrieve a list of all orders placed.
- **Create an order**: `POST /api/Order`
  - Place a new order by providing the necessary details such as pickup name, phone number, email, user ID, order total, payment intent ID, status, total items, and order details.
- **Get an order by ID**: `GET /api/Order/{id}`
  - Retrieve a specific order by its unique ID.
- **Update an order**: `PUT /api/Order/{id}`
  - Update an existing order by specifying its ID and providing the updated order details.

## Shopping Cart

- **Get the shopping cart**: `GET /api/ShoppingCart`
  - Retrieve the contents of the user's shopping cart.
- **Add items to the shopping cart**: `POST /api/ShoppingCart`
  - Add items to the user's shopping cart by specifying the necessary details.

## Payment

- **Process payment**: `POST /api/Payment`
  - Process a payment by providing the user ID. (Additional details about the payment process may be required. Refer to the API documentation for more information.)

Please refer to the API documentation for detailed information on request/response payloads and parameters for each endpoint.

For any further assistance or inquiries, please contact me!
