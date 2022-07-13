# Hawkeye Cup Admin

## API Key expiration

-   To check the expiration run
    -   Use https://docs.aws.amazon.com/cli/latest/reference/appsync/index.html#cli-aws-appsync
    -   aws appsync list-api-keys --api-id (id in aws exports file)
-   aws appsync update-api-key --api-id <api-id from exports file> --id <id from previous step> --expires <date converted to epoch>



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




# Hawkeye

## Setup

- Course Selection for the Sessions
- Golfer Details
- Session Games


## Draft 

- Sunday Night Draft to determine the 8 Black and 8 Gold Team Members

## Day 1 - Format

### Setup in ther Morning
- Put the Groupings together (Would like to do that from the app)

### Morning 
- 8 Team (2 Pts available Per Match)
- 18 Hole 2 Person Low Ball Match Play
    - Low Ball Match 
    - 1 point per hole and half a hole if pushed
    - This could be visible during the round ( include in front end )

- Show in / out and total 

- Skins
    - Net off of handicap

- Stableford
    - [Scoring](https://golfbit.com/stableford)

- Net Score Leader Board

- Condo Mondo




### Afternoon
- Two Person Best Shot



### Print outs of Day 1
- 18 Hole Scores 
- Skins
- Stableford



### Version 2 - Phase 1

- Set Golfers
- Set Groups
- Enter Scores in