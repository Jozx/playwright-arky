# Playwright FPM Project

This project is a practice implementation of End-to-End (E2E) testing using **Playwright** and the **Functional Page Model (FPM)** pattern.

The goal is to demonstrate a clean, maintainable, and scalable test automation architecture.

## 🚀 About the Project

This repository tests a web application (Arky) using the **Functional Page Model (FPM)** approach. unlike the traditional Page Object Model (POM), FPM separates concerns into distinct modules for Locators, Actions, and Data, promoting better reusability and separation of concerns.

### Key Features
- **FPM Architecture**: Logical separation of test components.
- **Environment Variables**: Secure credential management using `.env`.
- **TypeScript**: Strictly typed codebase for better tooling and error prevention.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 📦 Installation Steps

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright-arky
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**
   This command installs the browser binaries required by Playwright to run tests.
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

This project uses environment variables for configuration. You need to set them up before running tests.

1.  **Create a `.env` file** in the root directory. You can use `.env.example` as a reference if it exists.
    ```bash
    cp .env.example .env
    ```
    *(If `.env.example` does not exist, create a new `.env` file manually)*

2.  **Add the following variables** to your `.env` file:

    ```env
    BASE_URL=https://arky-frontend-refactor.vercel.app # Example URL
    ARCHITECT_EMAIL=your_architect_email@example.com
    ARCHITECT_PASSWORD=your_architect_password
    USER_EMAIL=your_user_email@example.com
    USER_PASSWORD=your_user_password
    ```

    > **Note**: Update the values with the actual credentials and URL of the environment you are testing.

## 📂 Project Structure

The project follows the **Functional Page Model (FPM)** structure:

```
playwright-arky/
├── tests/
│   ├── features/
│   │   ├── login/
│   │   │   ├── login.spec.ts      # Test scenarios (Arrange, Act, Assert)
│   │   │   ├── login.actions.ts   # Functions to perform actions (e.g., login, navigate)
│   │   │   ├── login.locators.ts  # Object containing element selectors
│   │   │   └── login.data.ts      # Static data and environment variables
│   │   └── ...
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Project dependencies and scripts
└── .env                           # Environment variables (not committed)
```

### Understanding FPM Components
- **`*.spec.ts`**: Contains the test cases. It orchestrates the test flow using actions and assertions.
- **`*.actions.ts`**: Contains reusable functions that interact with the page (clicks, inputs).
- **`*.locators.ts`**: Stores the selectors (CSS, XPath) for identifying elements on the page.
- **`*.data.ts`**: Manages test data, including credentials and URLs.

## ▶️ Running Tests

You can run the tests using the following commands:

- **Run all tests**
  ```bash
  npx playwright test
  ```

- **Run tests in UI mode** (Interactive)
  ```bash
  npx playwright test --ui
  ```

- **Run tests in debug mode**
  ```bash
  npx playwright test --debug
  ```

- **View the HTML test report**
  ```bash
  npx playwright show-report
  ```

