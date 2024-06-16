Project Overview
This repository contains a Todo application developed as part of an internship/associate engineer interview assignment. The application allows users to manage their tasks with CRUD operations (Create, Read, Update, Delete) using a frontend built with ReactJS and TypeScript, and a backend developed with C# .NET using an SQLite database.

Features

Backend (C# .NET)
RESTful API endpoints for Todo CRUD operations.
Integration of SQLite database with Entity Framework.
Error handling and validation for API requests.

Frontend (ReactJS with TypeScript)
User-friendly and responsive interface for managing Todo items.
Implementation of CRUD operations in the frontend.
Proper input validation and error handling.
Styling for an aesthetically pleasing user experience.

Project Structure
Backend (/backend):
Contains C# .NET application files.
Startup.cs: Configures services and middleware for the application.
TodoController.cs: Defines API endpoints for Todo CRUD operations.
TodoContext.cs: Defines the database context using Entity Framework.

Frontend (/Todo-App):
Contains ReactJS application files.
src/components: Includes components such as TodoList.tsx and TodoForm.tsx.
src/services/TodoService.ts: Handles HTTP requests to the backend API.
src/App.tsx: Main entry point for the React application.

Installation and Setup
Clone the Repository: 
1. git clone https://github.com/maryamnawas/Todo-App.git -> cd Todo-App

Backend Setup:
2. Navigate to the Backend Directory: cd Backend
3. Install Dependencies: dotnet restore
4. Update Database: Ensure the SQLite database is correctly set up - dotnet ef database update
5. Run the Backend Server: dotnet run
   
Frontend Setup:
1. Navigate to the Frontend Directory: cd Todo App
2. Install Dependencies: npm install
3. Run the Frontend Server: npm start

Future Improvements
Enhance backend CRUD operations with more robust error handling and validation.
Implement user authentication and registration features.
Improve frontend UI/UX with additional styling and animations.
