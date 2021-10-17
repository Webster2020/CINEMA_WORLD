# CINAME WORLD

CINEMA WORLD is an application simulating the operation of a cinema website. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I created this application to train my skills in REACT $ REDUX. This project was prepared mainly with React.js library. Project is divided into components with scss styling files and JS files.

## How it works
![](CINEMA_WORLD_1.gif)
![](CINEMA_WORLD_2.gif)

## Link
https://cinemaworld.webster2020.com/

## How to start:
1. git clone git@github.com:Webster2020/CINEMA_WORLD.git
2. yarn install
3. yarn start - run the project and than You can see it on Your device

*...or use link if You only want to check how it works

## Used technologies:
 1. React with Hooks - as main library
 2. Redux - store
 3. SCSS - for styling
 4. Styled components - for styling FooterBar
 5. HTML5 - for content
 6. React Router - for routing
 7. React Icons
 8. React FlexBox Grid
 9. Styled Components - to styling Footer 
 10. Eslint - to control bugs
 11. Husky - to control bugs before every commit
 12. Lint Staged - to check only changed files

## Implemented solutions:
Application is divided into four views: home, movies, tickets and confirm. Menu with logo on the top to switch between views.
 1. Home:
 - slider with movies
 - list of movie posters with basic information
 - filters (title, categorie, year)
 2. Movies:
 - filter with week days
 - list of movies with shows hours
 - click on any hour drives to 'tickets' page
 3. Tickets: 
 - room view with clickable seats
 - booking form with validation
 4. Confirm:
 - information about booking (seats, name, email, day, hour, movie) 

## Project architecture
Project is not divided into components in accordance with the React convention.
 1. components with JS, JSX and SCSS
 2. root file: index.html
 3. store and reducers in redux folder
 4. data with initialStoreData
 5. others functions in utils
 6. configuration files: gitignore, package.json, etc.

## How did I create this project?
Project was prepared based on my own idea and using my current knowledge and skills.

## Plan for future development
- Refactor code
- Single movie page with details
- Create logic for more rooms - in this moment selecting each hour in every movie directs to the same room

## Authors
* **Michal Szwajgier** - *Webster2020* - 

## License
Free licence
