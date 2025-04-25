# Movie Explorer
Movie Explorer is a fast and modern web app built with React, Vite, and TypeScript. It lets users search for movies and TV shows using the OMDb API, with features like debounced search, result caching, and detailed popups. Designed with best practices for scalability, maintainability, and performance.

---

## Features

- **Search Movies and TV Shows**: Search for movies or TV shows by entering a query in the  search bar.
- **Debounced Search**: Optimized search experience with debouncing to reduce unnecessary API calls.
- **AbortController**: Efficiently handles API requests by canceling stale or unnecessary requests.
- **Caching**: Reduces redundant API calls by caching previously fetched results.
- **Movie Details Popup**: View detailed information about a movie, including its plot, ratings, and more.
- **Pagination**: Navigate through multiple pages of search results.
- **Responsive Design**: Fully responsive UI for seamless usage across devices.
- **Error Handling**: Graceful error handling with user-friendly toast notifications.
- **Code Quality**: Enforced coding standards using ESLint and Husky pre-commit hooks.

---

## Tech Stack

- **Frontend**: React, TypeScript, SCSS
- **State Management**: React Hooks
- **Dependency Injection**: `tsyringe`
- **API Integration**: Axios
- **Testing**: Jest, React Testing Library
- **Build Tool**: Vite
- **Styling**: SCSS
- **Notifications**: React Toastify
- **Code Quality**: ESLint, Prettier, Husky

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [SCSS](https://sass-lang.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [ESLint + Prettier](https://eslint.org/)
- [Jest](https://jestjs.io/)

---

## Project Structure
```text
src/ 
 ├── assets/   # Static files and images 
 ├── pages/    # Page components 
 ├── shared/   # Shared components, hooks, helper, types
 ├── infra/    # Services, DI container 
 ├── styles/   # SCSS styles 
 ├── tests/    # Unit and integration tests
 ├── App.tsx   # Main app component 
 └── main.tsx
```

---

## Coding Standards

- **Linting**: ESLint is used to enforce consistent coding standards.
- **Formatting**: Prettier is used for code formatting.
- **Pre-commit Hooks**: Husky is configured to run linting and formatting checks before every commit.
- **Type Safety**: TypeScript is used to ensure type safety and reduce runtime errors.

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OMDB API Key (Sign up at [OMDB API](https://www.omdbapi.com/) to get your API key)

---

## Setup
 
 1. Clone the repository
```bash
git clone https://github.com/parallel-minds-assignment/react-varsha-apple-assignment.git
cd react-varsha-apple-assignment 
```
 2. Install dependancies
```bash
  npm install
```
3. Set up environment variables: Create a .env file in the root directory and add the following:
```bash
VITE_OMDB_API_KEY=your_omdb_api_key
VITE_BASE_URL=https://www.omdbapi.com/
```

## Build and Run

- Development Server
Start the development server:

```bash
 npm run dev 
```
- Production Build
Build the project for production:
```bash
 npm run build 
```
**Testing**

- Run unit and integration tests:
```bash
 npm run test 
```
- Run tests in watch mode:
```bash
 npm run test:watch 
```
## 📖 Usage
1. Open the app in your browser.
2. Enter a search query (minimum 3 characters) in the search bar.
3. Browse through the search results.
4. Click/hover/tab on icon on movie card to view detailed information in a popup.
5. Use the pagination controls to navigate through pages.

## Dependencies

**Key Dependencies**
- React: Frontend library for building user interfaces.
- TypeScript: Superset of JavaScript for type safety.
- Axios: HTTP client for API requests.
- React Toastify: For displaying toast notifications.
- tsyringe: Lightweight dependency injection container for TypeScript.

**Dev Dependencies**
- ESLint: Linting tool for identifying and fixing problematic patterns in code.
- Prettier: Code formatter for consistent styling.
- Husky: Pre-commit hooks to enforce code quality.
- Jest: Testing framework for unit and integration tests.
- React Testing Library: For testing React components.


## Resources
- [OMDb API Documentation](https://www.omdbapi.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
