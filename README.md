# Rule Engine

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Sample Test Cases](#sample-test-cases)
- [API Endpoints](#api-endpoints)
- [Design Choices](#design-choices)
- [Future Enhancements](#future-enhancements)

---

## **Project Description**
The Rule Engine is a web-based application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create and evaluate complex conditional rules. These rules are represented using an Abstract Syntax Tree (AST) to allow dynamic creation, combination, and modification. This application is ideal for scenarios where user eligibility needs to be checked against custom attributes.

## **Features**
- **Rule Creation**: Supports rules based on attributes like age, department, salary, and experience.
- **Rule Combination**: Allows combining multiple rules with logical operators (AND, OR).
- **Rule Evaluation**: Evaluates the rules dynamically based on user data.
- **Error Handling**: Handles invalid inputs and unsupported operators gracefully.

## **Technologies Used**
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (stores rule data and attributes)
- **Additional Tools**: Docker (optional) for containerized deployment

## **Setup Instructions**

### Prerequisites
1. Node.js and npm installed
2. MongoDB installed locally or access to MongoDB Atlas

### Clone the Repository
```bash
git clone https://github.com/Yashvithalkar/RulesEngine.git
cd RulesEngine
