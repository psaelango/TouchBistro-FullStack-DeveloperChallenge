# Frontend Component

## Commands to start the client

* `npm install`
* `npm run build`
* `npm run start`

> Client starts running in http://localhost:3000 (or) http://127.0.0.1:3000 by default

## Commands to test client files

* `npm run test`

## Folder structure of the client/src

```
├── components 
│   ├── Individual folders
│   │   ├── **/*.tsx      # Common UI components of the application
│
├── containers
│   ├── **/*.ts           # Context Provider for handling specific tasks of the application
│ 
├── contexts
│   ├── **/*.ts           # React context files for certain shared functionality and data
│
├── pages
│   ├── Individual folders
│   │   ├── **/*.tsx      # Components belong in the single page view
│
├── App.tsx       # Parent Component
│
├── index.tsx     # Entry point to application
│
├── .gitignore    # File to store the list of developments files/folders to be ignored to production
│
└── tsconfig.json # Configuration file for typescript
```