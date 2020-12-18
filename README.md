# Welcome to Minesweeper!

This is a simple Minesweeper app built with JavaScript and React.

## Gameplay

Select the number of rows and columns you want your minefield to have. Select the number of mines randomized across your board. Click reset board to set the board with your new stats.

Click on a square. If the square contains a mine a pop up will notify you that you've lost the game. If the square is not a mine, the program will identify the number of surrounding mines and display it, allowing you to logically choose your next square. If there are no mines surrounding your choosen square the program will recursively click surrounding squares until it encounters a square close next to a mine or hits a wall.

You win the game when you have revealed all square that don't contain mines. Good luck!

## Technologies Used

JavaScript, React, Styled Components, CSS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.