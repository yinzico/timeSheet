# timeSheet

An assignment for TechVista.

## Overview

This is an Angular application for a Smart Student Time Sheet System. It allows students to log in with their ID, view their current/upcoming class, and see a list of all their scheduled classes.

## Project Structure

- `src/app/`: Main application code
  - `app.component.*`: Root component and configuration
  - `app.routes.ts`: Application routes
  - `components/`: UI components
    - `student-loggin`: Student login form
    - `student-layout`: Layout for student info and classes
    - `current-schedule`: Displays current/upcoming class
    - `classes-list`: Table of all classes for the student
- `src/_core/`: Core logic
  - `models/`: TypeScript interfaces for data models (`IClass`, `ICurrentClass`, `IStudentSchedule`)
  - `repositories/`: Data access layer (`StudentRepository`)
  - `services/`: Business logic and notifications (`FacadeService`, `NotificationService`, `StudentService`)
  - `strategies/`: Strategy pattern for fetching student schedules (API or local mock)
  - `tokens/`: Injection tokens for strategy selection
- `src/assets/`: Static assets
- `src/styles.scss`: Global styles (Tailwind + Angular Material)

## Features

- **Student Login:** Enter student ID to view schedule.
- **Current/Upcoming Class:** Shows student name, ID, class, date, and time.
- **Classes List:** Table of all scheduled classes.
- **Notifications:** Success/error messages using Angular Material Snackbar.
- **Strategy Pattern:** Easily switch between API and mock data for student schedules.
- **Routing:** `/loggin` for login, `/student-info` for schedule view.

## How to Run

Install dependencies and start the development server:

```sh
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Testing

Run unit tests:

```sh
npm test
```

## Configuration

- Change data source strategy in [`appConfig`](src/app/app.config.ts) by setting `useClass` to `StudentService` (API) or `LocalMockStrategy` (mock).

## Technologies

- Angular 17
- Angular Material
- RxJS
- Tailwind CSS

---
