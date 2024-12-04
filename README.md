# Search-Serpent**
REACT PLUS VITE**
A React app for exploring scholarly articles with real-time search, interactive result lists, and detailed article views featuring metadata like ISSN and publisher info. Includes AI-powered summarization for quick insights. Built with API integration, dynamic routing, and debounced useEffect for smooth, optimized performance.

React Scholarly Article Search and Summarizer
A React VITE application for exploring scholarly articles with real-time search, detailed views, and AI-powered summarization.

**Features**
Real-Time Search: Dynamic search with API-powered suggestions.
Interactive Result List: Clickable list for exploring articles.
Detailed Article View: Displays ISSN, publisher, issue date, and direct URL.
AI Summarization: Summarize articles with a single click.
Getting Started
Follow the steps below to set up and run the project locally.

**Prerequisites**
Node.js and npm are installed on your machine.
API keys for the scholarly article search and AI summarization services.

**Installation**
1.) Clone the Repository
2.) bash
3.) Copy code
4.) git clone <repository-url>
5.) cd scholarly-article-search
          
**Install Dependencies**
1.) bash
2.) Copy code
3.) npm install
4.) Set Up Environment Variables

**Create a .env file in the root directory.**
Add the following variables:
env
Copy code
VITE_APP_KEY="your_search_api_key"


**Start the Development Server**
1.) bash
2.) Copy code
3.) npm start
4.) Open http://localhost:3000 or http://localhost:5173/ to view the app in your browser.
5.) Testing Functionality
6.) Search Articles: Use the search bar to look up articles and see real-time suggestions.
7.) View Details: Click on a search result to see detailed information about the article.
8.) AI Summarization: Test the "Click for AI Summarization" button for quick summaries.
9.) Building for+ Production  
10.) To create a production build, run:
11.) bash
12.) Copy code
13.) npm run build
14.) The build files will be located in the build/ directory.


** Troubleshooting**
  *Ensure API keys are correctly set up in the .env file.
  *You must visit https://cors-anywhere.herokuapp.com/corsdemo and click Allow Access before running the app to bypass CORS restrictions.
  *Check the console for errors during runtime.
  *Run npm install to ensure all dependencies are installed.
  *License
  *This project is licensed under the MIT License.

Feel free to contribute or report issues! 😊

