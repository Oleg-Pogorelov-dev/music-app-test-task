MUSIC-APP-TEST_TASK was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

TEST-MUSIC-APP: https://github.com/Oleg-Pogorelov-levi/test-music-app

## Available Scripts

In the project directory, you need run:

### `npm i`
to install required modules

Then:

### `npm start`
to start the app

To build the completed project into a stand-alone web page:
1. Use additional app.
2. Find location (page) where you would like to place a content.
3. Pass your current domen where the app is run using `iframe` tag with `src` attribute.
4. Set styles for frame-border, width and height.
5. Final result should look like this: `<iframe src="http://localhost:3000" frameBorder="0" style={{ width: '100%', height: '100vh' }}></iframe>`

For to run an app as widget atteahed an additional app:
1. Run current app (MUSIC-APP-TEST_TASK) on localhost:3000 with `npm start`.
2. Run the attached app on localhost:3001 with the same command. When you get a message "Something is already running on port 3000. Probably:
  music-app-test-task" type `Y` and press `Enter` to run the second app on localhost:3001.

