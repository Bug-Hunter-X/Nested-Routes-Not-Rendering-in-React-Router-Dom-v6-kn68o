# React Router Dom v6 Nested Route Bug

This repository demonstrates a bug encountered with nested routes in React Router Dom v6.  The issue involves nested routes failing to render correctly, even though they are properly defined.

## Bug Description

Nested routes within a parent route fail to render. The parent route loads successfully, but its child routes remain inaccessible and do not render.

## How to reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe that navigating to nested routes does not render the expected components.

## Solution

The solution involves ensuring that the `useRoutes` hook or the `Routes` component is used appropriately and that all the paths are accurately defined and nested correctly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.