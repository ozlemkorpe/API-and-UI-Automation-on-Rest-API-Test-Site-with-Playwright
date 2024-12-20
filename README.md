# Rest API Test Site - Playwright Project

This repository contains a demo project that automates both UI and API testing for the "Rest API Test Site" using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/). The project is structured to handle testing scenarios and serves as a guide for integrating UI and API tests within a single framework.

---

## Project Features

- **UI Testing**:

  - Automates user interactions on the Rest API Test Site.
  - Validates key elements like buttons, forms, and navigation flows.
  - Ensures visibility and functionality of critical UI components.

- **API Testing**:

  - Validates REST API endpoints for correct responses and data.
  - Tests different authentication types (e.g., Basic Auth, Bearer Token).
  - Handles scenarios like error responses, missing headers, and invalid requests.

---

## Project Setup

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- Git

### Installation

1. Clone this repository:


2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## Running Tests

### Running All Tests

```bash
npx playwright test
```

### Running UI Tests Only

```bash
npx playwright test tests/ui
```

### Running API Tests Only

```bash
npx playwright test tests/api
```

### Running a Specific Test

```bash
npx playwright test tests/api/comments.spec.ts
```

## Acknowledgments

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

Happy Testing!

