# SpaceX React App

A simple React app using data from SpaceX missions.
With this application, the user can learn the SpaceX history and see all the launches with filtering options.

## Task explanations

### Task 1

The project is based on React and Redux-saga libraries and using Webpack as module bundler.
ES2015 syntax is transpiled by babel-loader, the SCSS syntax is transpiled to CSS.

### Task 2

React Router is used for navigation through the sections. 'Page Not Found' page is created for invalid URLs.

### Task 3

History page renders the necessary properties and provides a link with further information.

### Task 4

Launches page renders all the SpaceX launches with details. Filtering is available by mission name and mission date from-to.

### Task 5

Another Launch filter - a ComboBox is available where the user can filter by the possible orbits of the rockets.

### Task 6

Clicking on a launch item, a Modal appears with some more details and an embedded video of the launch if available.

## Further improvements

Due to the short deadline, the testing, some features and performance improvements are out of scope for now.

- Send selected information to imaginary endpoint
- Pagination (limit/offset)
- JSON Field Masking
- Use of Redux Selectors
- Testing

## Setup

### Install the dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Linting the project

```bash
npm run lint
```

### Start the development server

```bash
npm start
```

This project uses eslint (extending Airbnb rule set).
