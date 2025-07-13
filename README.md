# Pet Accessories E-Commerce Website

This is a frontend project for an e-commerce website focused on selling pet accessories. The application is built using React with TypeScript, styled using Tailwind CSS, and structured with scalability and maintainability in mind.

## Tech Stack

-> React (with JavaScript)  
-> Vite (for development and build tooling)  
-> Tailwind CSS (for utility-first styling)  
-> React Router DOM (for routing)  
-> Context API (for state management)  

## Folder Structure

-> public/  
   Contains static assets

-> src/components/  
   Reusable UI components like Header, Footer, ProductCard, CategoryCard

-> src/pages/  
   All route-level components such as Home, Cart, Checkout, Login, ProductDetail, etc.

-> src/context/  
   Application-wide state management using CartContext

-> src/data/  
   Contains mock product data used for UI rendering

-> src/types/  
   TypeScript type definitions for entities like Product and CartItem

-> src/App.tsx  
   Root component that sets up routes and layout

-> src/main.tsx  
   Application entry point that renders the App component

## Core Functionalities

-> Display categories and products dynamically  
-> Detailed product page with add-to-cart functionality  
-> Cart page with update and remove options  
-> Checkout page (form only, no backend integration)  
-> Login and Sign-Up pages for future integration  
-> Fully responsive layout across devices  

## Highlights

-> Code follows component-based architecture  
-> State is managed efficiently using React Context  
-> Application is fully typed using TypeScript interfaces  
-> Layout and design are consistent and mobile-friendly  
-> Folder structure is modular and ready for backend/API integration  

## Running the Project

-> Install dependencies using `npm install`  
-> Start development server with `npm run dev`  
-> Visit `http://localhost:5173` to view the application  

## Note

-> This is a frontend-only project  
-> Product data is locally mocked and there is no real authentication or backend logic implemented yet
