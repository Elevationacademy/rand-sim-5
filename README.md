# Goal
In this simulation the goal is to convert a messy code base into a clean one using clean code principles.

# Connect to Server
Make sure you have [this repo](https://github.com/Elevationacademy/rnd-server-simulation) cloned and you are running it's server. Additionally, please run `mongod`

# To Do

### Clean Up The Code

- Seperate all the components in `App.js` to separate files according to the provided component tree.
- In the `PhotoSection` component, instead of calling the `renderData` function, create a separate component for that code and load it from the `PhotoSection` component.
- Create a separate component for the `likes-sections`
- Convert all components that don't have `state` or `internal functions` to functional components.
- Delete any dead code that isn't being used (console logs, comments, functions that aren't being used, etc...).
- Create some helper functions for the `requestPhotos` function in the `App` component.

### Known Bugs

- When clicking the search button the app crashes.

### Extra Features

- Create a "Load More" button at the bottom of the page to load more images underneath the already loaded images. You can paginate by adding `?page={pageNumber}` to the end of your API request.
- If the user receives a 500 error message from the server you should display a notification that notifies the user that an error occurred.
- Allow the user to click 'Enter' on the keyboard to search for images.