

Healthcare Services Management API

This project is a Node.js-based REST API built with Express.js to manage healthcare services. The API enables users to perform CRUD operations (Create, Read, Update, Delete) on services, and data is stored in a MongoDB database. Validation mechanisms ensure data integrity. The API is also tested using Postman, making it reliable and easy to use for healthcare service management.



 Key Features
1. CRUD Operations:
   - Add a new service with required fields like `name`, `description`, and `price`.
   - Retrieve all available services.
   - Update existing service details.
   - Delete a service by ID.

2. Data Storage:
   - Services are stored in MongoDB using Mongoose for schema validation and database operations.

3. Input Validation:
   - Ensures mandatory fields (`name` and `price`) are provided.
   - Validates that `price` is a valid number greater than zero.
   - Returns meaningful error messages for invalid requests.

4. Postman API Testing:
   - Postman was used to test all endpoints with various payloads.
   - A Postman collection is included for easy replication of tests.

5. Error Handling:
   - Handles common errors like missing fields, invalid IDs, or nonexistent records.
   - Returns appropriate HTTP status codes for client and server-side errors.

6. Scalable Design:
   - Modular folder structure with separate files for routes, controllers, and models.
   - Prepares the API for future enhancements, such as authentication and additional endpoints.



 Technologies Used
- Node.js: JavaScript runtime for building scalable applications.
- Express.js: Framework for handling routes and middleware.
- MongoDB: NoSQL database for flexible and efficient data storage.
- Mongoose: ODM library for schema definition and MongoDB integration.
- Postman: For testing and documenting the API.
- Validation: Input validation using Mongoose schemas and manual checks in the controller.



 Postman Documentation
The API endpoints were tested extensively using Postman to ensure reliability. Key tests include:
1. Add Service:
   - Endpoint: `POST /services`
   - Payload:
     ```json
     {
       "name": "Physiotherapy",
       "description": "Physical therapy session with experts",
       "price": 500
     }
     ```
   - Expected Response: `201 Created`

2. Retrieve All Services:
   - Endpoint: `GET /services`
   - Expected Response: Array of all available services.

3. Update Service:
   - Endpoint: `PUT /services/:id`
   - Payload:
     ```json
     {
       "name": "Advanced Physiotherapy",
       "description": "Updated session description",
       "price": 750
     }
     ```
   - Expected Response: Updated service object.

4. Delete Service:
   - Endpoint: `DELETE /services/:id`
   - Expected Response: Confirmation message.



 MongoDB Database Setup
1. Connection:
   - Connected to a local MongoDB instance using the URI:  
     `mongodb://localhost:27017/healthcare`.

2. Schema Design:
   - The `Service` schema ensures:
     - `name`: Required string.
     - `description`: Optional string.
     - `price`: Required number greater than zero.

   - Example Schema Definition:
     ```javascript
     const serviceSchema = new mongoose.Schema({
         name: { type: String, required: true },
         description: { type: String },
         price: { type: Number, required: true, min: 0 }
     });
     ```

3. Validation at Database Level:
   - Mongoose automatically enforces schema constraints.
   - Additional manual validation in the controller ensures clean input.


