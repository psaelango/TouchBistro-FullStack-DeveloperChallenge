# TouchBistro-FullStack-DeveloperChallenge

## Project Description

- Simple web app to find the median prime number(s) of the set of prime numbers
- Project to demostrate full stack coding capabilities in developing production ready application
- Additional things I have worked in this application
  - `Backend`
    - Caching
      - Added advanced custom caching concept*. For example - If prime numbers upto 100000 are requested for the first time, it takes approx 1.5 secs. After that till the cache expiration time (currently 2 minutes), for the request between previous prime (99991) and next non prime before prime (100002) values, the cached value will be returned instead of new calculation (as they will have same results), which takes reduced time approx of .3 secs.
    - Followed below best coding practices
      - Folder Structure
      - Code Seperation
      - Code Linting
      - Code Formatting
      - Code Testing
      - HTTP Request Validation
      - Request / Response / Error Logging
  - `Frontend`
    - Long API call Loaders
      - Demonstrated one of the few ways to tackle long waiting api calls
    - Followed below best coding practices
      - Folder Structure
      - Code Seperation
      - Code Testing

- Taken following amount of hours in developing this application
  - 4 ~ 5 hours in Backend development
  - 3+ hours in Frontend development
  - 1+ hours in Product Documentation

---
## Refer following README files to get started with this project

- [Client README](client/README.md)
- [Server README](server/README.md)

---
## My Prior Experience

- I have 7+ years of production experience with NodeJS applications
- I have 7+ years of production experience with ReactJS applications

---

>Author: Prasanna Elangovan
