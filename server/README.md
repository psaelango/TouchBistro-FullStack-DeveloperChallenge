# Backend Component

## Commands to start the server

* `npm install`
* `npm run build`
* `npm run dev`

> Server starts running in http://localhost:8000 by default

## Commands to test, lint, format the server files

* `npm run test`
* `npm run lint:fix`
* `npm run format:prettier`

## Folder structure of the server


```
├── controllers 
│   ├── tests
│   ├── **/*.ts   # Set of functions for handling each incoming requests and returning responses
│
├── middleware
│   ├── **/*.ts   # Set of functions for moving between other functions within request-response cycle 
│
├── routes
│   ├── **/*.ts   # Integration of HTTP requests ( GET, POST, PUT, DELETE, etc.) to a controller function
│
├── utils
│   ├── tests
│   ├── **/*.ts   # Set of reusable utility functions across various controllers
│
├── validator
│   ├── **/*.ts   # Validation functions to verifying the HTTP request data is in right format
│
├── app.ts        # Entry point to the application
│
├── cache.ts      # Cache module for the faster response to frequent HTTP request of same results
│
├── .gitignore    # File to store the list of developments files/folders to be ignored to production
│
├── .eslintignore # File to store the list of files/folders to be ignored for linting
│
├── .eslintrc     # Configuration file for code linting
│
├── .prettierrc   # Configuration file for code formatting
│
├── .jest.config  # Configuration file for code testing
│
└── tsconfig.json # Configuration file for typescript
```