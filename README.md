# Online Library System
 A modern React-based application to browse, search, add, and view details about books in an online library.

## Features
 * **Landing Page**: Welcome message with curated book categories and a selection of popular books.

 * **Dynamic Browsing**: Filter books by category and search by title or author.

 * **Book Details**: View title, author, description, and rating of selected books.

 * **Add Book**: Form to add a new book to the library (with validation), state managed by Redux Toolkit.

 * **404 Not Found**: Custom page for nonexistent routes with navigation back to Home.

 * **Responsive & Polished UI**: Mobile-friendly layout and animated interactions.

 ## Technologies
 * **React**
 * ***Vite**
 * **Redux Toolkit**
 * **React Router**

 ## Getting Started
  
  ### Prerequisites
  + Node.js (v16 or higher recommended)
  + npm (comes with Node.js)

  ### Installation
   1. **Clone the repository:**
     ```plain
       git clone (https://github.com/alankritip/Online-Library-System)
       cd online-library
     ```
   2. **Install dependencies:**
     ```plain
       npm install
     ```
   3. **Start the app in development mode:**
     ```plain
       npm run dev
     ```
    * The app will run at (http://localhost:5173) (Vite default) or as shown in your terminal.

 ## Usage:
  * **Home**: View categories and popular books.
  * **Browse Books**: Filter books by category or search by title/author. Click a book to view its details.
  * **Add Book**: Use the navigation link to add new titles (all fields required).
  * **Book Details**: Shows additional book info and lets you return to the browse list.
  * **Invalid URLs**: Navigating to a non-existent page will show a 404 error with a link back home.

 ## Folder Structure: 

```plain
  online-library/
├── public/                      # Static files (favicon, etc.)
│
├── src/
│   ├── assets/                  # Images or custom icons (optional)
│   │
│   ├── components/              # Reusable UI components
│   │   ├── NavBar.jsx
│   │
│   ├── pages/                   # Route-based page components
│   │   ├── HomePage.jsx
│   │   ├── BrowseBooksPage.jsx
│   │   ├── BookDetailsPage.jsx
│   │   ├── AddBookPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── redux/                   # Redux Toolkit state management
│   │   ├── booksSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx                  # Main app shell (sets up routing)
│   ├── App.css                  # Global styles (imported in App.jsx)
│   └── main.jsx                 # React entry, Redux + Router providers
│
├── package.json
├── README.md
└── vite.config.js
```

 ## License
    This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
