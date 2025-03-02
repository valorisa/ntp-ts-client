
# ntp-ts-client

<!-- Table of Contents -->
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

`ntp-ts-client` is a TypeScript-based Node.js application designed to query an NTP (Network Time Protocol) server and retrieve the current date and time. This project demonstrates how to implement an NTP client using TypeScript, with support for testing and continuous integration.

---

## Features

- **NTP Client Implementation**: Query NTP servers to retrieve accurate date and time.
- **TypeScript Support**: Fully typed codebase for better maintainability and developer experience.
- **Unit Testing**: Comprehensive test coverage using Jest.
- **Docker Integration**: Includes a Dockerfile for easy deployment and containerization.
- **Lightweight**: Built on Alpine Linux for minimal resource usage.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- **Node.js** (v18 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js): Ensure `npm` is installed by running `npm --version`.
- **Docker** (optional): For containerized deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/valorisa/ntp-ts-client.git
   cd ntp-ts-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Start the application:
   ```bash
   npm start
   ```

---

## Usage

Once the application is running, it will query an NTP server (default: `pool.ntp.org`) and log the retrieved date and time to the console.

Example output:

You can customize the NTP server by modifying the `src/main.ts` file or passing a custom server as an argument.

---

## Testing

To run the tests, execute the following command:
   ```bash
   npm test
   ```

This will execute all tests defined in the `test/` directory using Jest. The tests include mocking the NTP server response to ensure fast and reliable execution.

Example test output:

---

## Directory Structure

Here is the structure of the project:
```
ntp-ts-client/
├── Dockerfile               # Docker configuration for containerization
├── dist/                    # Compiled JavaScript files (output of `npm run build`)
│   ├── main.js              # Entry point of the application (compiled)
│   └── ntp-client.js        # NTP client implementation (compiled)
├── node_modules/            # Installed dependencies (not versioned, ignored by `.gitignore`)
│   ├── @types/              # TypeScript type definitions
│   │   └── node/            # Type definitions for Node.js
│   ├── typescript/          # TypeScript compiler and related files
│   └── undici-types/        # Additional type definitions or libraries
├── package-lock.json        # Lock file for dependency versions
├── package.json             # Project configuration and scripts
├── src/                     # Source TypeScript files
│   ├── main.ts              # Entry point of the application (TypeScript source)
│   └── ntp-client.ts        # NTP client implementation (TypeScript source)
├── test/                    # Test files (optional, if tests are added)
│   └── ntp-client.spec.ts   # Unit tests for NTP client (if applicable)
├── tsconfig.json            # TypeScript configuration
├── README.md                # Documentation for the project
└── .gitignore               # Specifies intentionally untracked files to ignore
```
---

## Contributing

 Contributions are welcome! If you find any issues or want to add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request explaining your changes.

---

## License

This project is licensed under the [ISC License](LICENSE). See the `LICENSE` file for more details.
