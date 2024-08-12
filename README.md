# Job Listings with Filtering
![alt text](public/design/desktop-preview.jpg)
This project is a solution to the [Job Listings with Filtering challenge](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) on Frontend Mentor. The challenge involves creating a responsive job listing page where users can filter job postings based on selected categories.

## Live Demo
You can view the live site here: [Job Listings Live](https://victorkevz.github.io/job-listings/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Overview
This project is a landing page that displays job listings and allows users to filter the listings based on selected tags (role, level, languages). The data for the job listings is sourced from a local `data.json` file. The goal was to closely match the provided design and implement interactive features for a seamless user experience.

## Features
- **Filter Job Listings**: Users can click on tags to filter job listings. The selected filters appear in a sticky filter bar at the top of the page.
- **Responsive Design**: The layout adjusts for optimal viewing on various device screen sizes.
- **Interactive Elements**: Hover and focus states for all interactive elements enhance the user experience.
- **Animations**: The page uses Framer Motion for smooth animations when interacting with job listings and the filter bar.
- **Sticky Filter Bar**: The filter bar remains at the top of the viewport when scrolling, ensuring easy access to filters.

## Technologies Used
- **HTML5**: Markup language for structuring the content.
- **CSS3**: Styling the page to match the provided design.
- **React.js**: JavaScript library for building the user interface.
- **Vite**: A build tool that significantly improves the development experience.
- **Framer Motion**: A library used for creating animations in React applications.

## Setup
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VictorKevz/job-listings.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd job-listings
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will start the Vite development server and open the application in your default browser.

## Usage
- Click on job listing tags (e.g., role, level, languages) to filter the jobs displayed.
- The selected filters will appear in the sticky filter bar at the top of the page.
- To remove a filter, click the "x" button next to the tag in the filter bar.
- Click the "Clear" button in the filter bar to reset all filters and show all job listings.

## Acknowledgements
This project was completed as part of a challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Special thanks to the Frontend Mentor community for providing design challenges that help developers enhance their skills. 

Feel free to explore the repository, provide feedback, or contribute to the project.