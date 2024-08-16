## Project Overview

- **Name**: Virtual Currency Mining
- **Version**: 1.0.0
- **Description**: A Node.js application for managing virtual currency mining operations.
- **Main Entry Point**: `src/app.ts`



1. **Clone the repository**:
    git clone <git@github.com:ikita123/Playzap.git>
    cd <virtual-currency-mining>



2. **Install dependencies**:
    npm install

3. **Start the application**:
    npm start



## API Endpoints
### Authentication API

 http://localhost:3000/api/auth/register

 {
  "username": "nikita",
  "password": "testpassword"
}


http://localhost:3000/api/auth/login

 {
  "username": "nikita",
  "password": "testpassword"
}



### claim API

http://localhost:3000/api/mine/claim
add Authorization (Headers): token get from login 

