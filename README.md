## What I did to set up
1. ran `npx create-react-app wlr1-redux-lecture` and cd'd into it
2. ran `npm install react-router-dom`
3. imported `HashRouter` into `./src/index.js` and wrapped it around `App`
4. created 3 components, 2 routes and a Header for navigation `./src/components/AddMovie.js`, `./src/components/Movies`, and `./src/components/Header.js` respectively
5. created `./src/routes.js` and added `AddMovie` and `Movies` as routes
6. Imported the `routes` and `Header` into `./src/App.js` to be rendered