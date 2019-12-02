# Goal

In this simulation the goal is to convert a messy code base into a clean one using clean code principles, fix a bug, and write new features.

You should keep the browser open and make sure your app still works after making changes.

# Connect to Server

- Make sure you have [this separate repo](https://github.com/Elevationacademy/rnd-server-simulation) cloned.
- Run `git checkout clean-code` in your terminal in order to checkout to the `clean-code` branch.
- Run `npm install` and then run the server with `node server.js`.
- Run `mongod`.
- Now fork this current repo and clone it onto your computer.
- Run `npm install`.
- Start the react app by running `npm start`.
- Note: This is a front end exercise and therefore you will only be working on the `React` part of this app. Don't worry about the server side for now.

# To Do

### Clean Up The Code & Fix Bug

- Seperate all the components in `App.js` to separate files according to the provided component tree [Architecture.pdf].
- [Bug] When clicking the search button the app crashes.
- In the `Photo` component, instead of calling the `renderData` function, create a separate component for that code called `PhotoSection` and load it as a component instead of a method call.
- Create a component called `LikesSection` and load it as a component in place of the `likes-sections` div.
- Convert all components that don't have `state` or `internal functions` to functional components.
- Delete any dead code that isn't being used (console logs, comments, functions that aren't being used, etc...).
- Create some helper functions for the `requestPhotos` function in the `App` component [it shouldn't do everything itself].

### Extra Features

- Create a "Load More" button at the bottom of the page to load more images underneath the already loaded images. You can request different pages from the server by adding `?page={pageNumber}` to the end of your API request.
- Allow the user to click 'Enter' on the keyboard to search for images.

# Reminder

Don't forget to add imports and exports for any new files you create.

Good luck!
