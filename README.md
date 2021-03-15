# TechTestVideoTutorials

## Acceptance Criteria
- Upon load, the app downloads a list of available video tutorials, by performing a GET request to the given URL

- The app has a way for the user to refresh the video tutorials to view the most up to date information

- The app allows the user to perform the following actions:

```
/*
  Inputs: a collection of tags, typed by the user
  Outputs: the top 20 rated video tutorials, which contain any of the tags provided
*/
function getTopRatedTutorialsForTags(/* TODO */) {
/* TODO */
}
/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/
function searchForTutorials(/* TODO */) {
/* TODO */
} 
```
- The methods getTopRatedTutorialsForTags and searchForTutorials are covered with tests (for example - unit or integration tests)

- The user interface should be clear and easily navigable for the end-user

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

When the project is running you will see two inputs (the inputs should be comma separated):

- The top one will search the api for videos with specific tags
- The bottom one will search the videos you currently have loaded by Teacher Name, Title, Tags or a combination of the three.

Example inputs are given

### `npm test`

Launches the test runner in the interactive watch mode.\

