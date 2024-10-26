Project Description
The Rule Engine is a web-based application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create and evaluate complex conditional rules. These rules are represented using an Abstract Syntax Tree (AST) to allow dynamic creation, combination, and modification. This application is ideal for scenarios where user eligibility needs to be checked against custom attributes.

Features
Rule Creation: Supports rules based on attributes like age, department, salary, and experience.
Rule Combination: Allows combining multiple rules with logical operators (AND, OR).
Rule Evaluation: Evaluates the rules dynamically based on user data.
Error Handling: Handles invalid inputs and unsupported operators gracefully.
Technologies Used
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB (stores rule data and attributes)
Additional Tools: Docker (optional) for containerized deployment
Setup Instructions
Prerequisites
Node.js and npm installed
MongoDB installed locally or access to MongoDB Atlas
Clone the Repository
bash
Copy code
git clone https://github.com/Yashvithalkar/RulesEngine.git
cd RulesEngine
Backend Setup
Navigate to the backend directory:
bash
Copy code
cd rule-engine
Install dependencies:
bash
Copy code
npm install
Start the backend server:
bash
Copy code
npm run dev
Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd ../rule-engine-frontend
Install dependencies:
bash
Copy code
npm install
Start the frontend server:
bash
Copy code
npm start
Database Setup
Ensure MongoDB is running locally, or update the MongoDB URI in the backend config file to connect to MongoDB Atlas.
Usage
Creating Rules: Enter rules with conditions, e.g., age > 30.
Combining Rules: Choose a logical operator (AND/OR) to combine multiple rules.
Evaluating Rules: Enter JSON data, e.g., {"age": 35, "department": "Sales"}, to evaluate rules based on the conditions.
Sample Test Cases
Create Rule: age > 30 AND department = 'Sales'
Combine Rules: Combine the rule above with salary > 50000 OR experience > 5 using the AND operator.
Evaluate Rule: Using { "age": 35, "department": "Sales", "salary": 60000 }, expect True since it matches the rule conditions.
API Endpoints
Create Rule: POST /api/rules/create

Payload: { "rule_string": "<rule>" }
Description: Creates a new rule and stores it in the database.
Combine Rules: POST /api/rules/combine

Payload: { "rule_strings": [<rules>], "operator": "<AND|OR>" }
Description: Combines multiple rules into a single AST.
Evaluate Rule: POST /api/rules/evaluate

Payload: { "attributes": { ... }, "ast": <combinedAST> }
Description: Evaluates the provided attributes against the combined rule AST.
Design Choices
Abstract Syntax Tree (AST): Used for dynamic and flexible rule representation.
Separation of Concerns: Frontend and backend are separated, enabling independent scaling and updates.
API-Based Architecture: Easy to extend with additional endpoints and functionality.
Future Enhancements
User Authentication: Enable rule access based on user roles.
Advanced Condition Support: Add support for nested conditions and custom functions.
Performance Optimization: Cache frequently evaluated rules for faster access.
