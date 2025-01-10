# Kanban-Board

Kanban Board is a web application for managing tasks using a Kanban board. It allows users to create, update, and delete tasks, and assign them to different users. The application is built with a React frontend and an Express backend, and uses PostgreSQL for data storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT tokens
- Create, update, and delete tasks
- Assign tasks to users
- View tasks in different states (Todo, In Progress, Done)
- Responsive design

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board

2. Install dependencies for both the client and server:

    ```sh
    npm run install

3. Set up the environment variables:

    DB_NAME='kanban_db' 
    DB_USER='your_db_user' 
    DB_PASSWORD='your_db_password' 
    JWT_SECRET_KEY='your_jwt_secret_key'

4. Build 

    ```sh
    npm run build 

5. Seed

    ```sh 
    npm run seed

6. Start

    ```sh
    npm run start    

## Usage 

    - Open your browser and navigate to http://localhost:3001
    - login with existing user
    - Create, update, and delete tasks on the Kanban board.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



